import React, { useState, useEffect, useRef } from 'react';
import { productos } from '../data/productos.json';

export default function Destacados() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      setMaxScrollPosition(contentWidth - containerWidth);
    }
  }, []);

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 300, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + 300, maxScrollPosition));
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto max-w-7xl">
        <h2 className="text-3xl pb-10 font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Nuestros autos</h2>
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-2 bg-gray-400 rounded-10 hover:bg-gray-300 disabled:opacity-50"
            disabled={scrollPosition === 0}
          >
            &#8592;
          </button>
          <div className="flex overflow-hidden w-11/12 mx-auto" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 gap-4"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {productos.slice(0, 8).map((producto) => (
                <div key={producto.id} className="flex-shrink-0 w-60 mx-2 cursor-pointer rounded-lg bg-white p-2 shadow hover:shadow-md">
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
                      <p className="text-sm font-semibold text-gray-500">
                        <a href={producto.url}>
                          <span aria-hidden="true" className="absolute inset-0" />
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
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 bg-gray-400 rounded-10 hover:bg-gray-300 disabled:opacity-50"
            disabled={scrollPosition >= maxScrollPosition}
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}
