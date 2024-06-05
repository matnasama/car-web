import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { productos } from '../data/productos.json';

export default function Destacados() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  const [productPositions, setProductPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      setMaxScrollPosition(contentWidth - containerWidth);

      // Calculate product positions
      const positions = [];
      const children = containerRef.current.children[0].children;
      for (let i = 0; i < children.length; i++) {
        positions.push(children[i].offsetLeft);
      }
      setProductPositions(positions);
    }
  }, []);

  const scrollLeft = () => {
    const currentIndex = productPositions.findIndex((pos) => pos === scrollPosition);
    if (currentIndex > 0) {
      setScrollPosition(productPositions[currentIndex - 1]);
    }
  };

  const scrollRight = () => {
    const currentIndex = productPositions.findIndex((pos) => pos === scrollPosition);
    if (currentIndex < productPositions.length - 1) {
      setScrollPosition(productPositions[currentIndex + 1]);
    } else if (currentIndex === productPositions.length - 1) {
      // Align the last element perfectly to avoid large white space
      setScrollPosition(maxScrollPosition);
    }
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto max-w-7xl">
        <h2 className="text-3xl pb-10 font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Nuestros autos</h2>
        <button
            onClick={scrollLeft}
            disabled={scrollPosition === 0}
            className={`absolute h-3/6 left-0 z-10 p-2 bg-gray-400 rounded-10 hover:bg-gray-300 disabled:opacity-50 ${scrollPosition === 0 ? 'opacity-50' : ''}`}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            disabled={scrollPosition >= maxScrollPosition || scrollPosition >= productPositions[productPositions.length - 1]}
            className={`absolute h-3/6 right-0 z-10 p-2 bg-gray-400 rounded-10 hover:bg-gray-300 disabled:opacity-50 ${scrollPosition >= maxScrollPosition ? 'opacity-50' : ''}`}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        <div className="relative flex items-center">

          <div className="flex overflow-hidden mx-auto" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 gap-4"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {productos.slice(0, 8).map((producto) => (
                <div key={producto.id} className="flex-shrink-0 w-60 mx-2 cursor-pointer rounded-lg bg-blue-900/[.04] p-2">
                  <div>
                    <img className="w-full h-36 rounded-lg object-cover object-center" src={producto.img} alt={producto.nombre} />
                  </div>
                  <div>
                    <div className="my-6 flex items-center justify-between px-4">
                      <p className="font-bold text-gray-500">{producto.nombre}</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">Kilometros</p>
                      <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{producto.kilometros}</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">Año</p>
                      <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{producto.año}</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">Precio</p>
                      <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">{producto.precio}</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-blue-500">
                        <a href={producto.url}>
                          Ver más
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 w-60 mx-2 cursor-pointer flex items-center justify-center">
                <a href="/ver-mas" className="text-blue-500 font-semibold">Mostrar más</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
