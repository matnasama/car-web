import React, { useState, useEffect, useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/assets/image.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/assets/image.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/assets/image.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/assets/image.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/assets/image.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/assets/image.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
];

export default function Example() {
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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Product List</h1>
        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
            disabled={scrollPosition === 0}
          >
            &#8592;
          </button>
          <div className="flex overflow-hidden w-full" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 gap-4"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-60 mx-2 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                  <img className="w-full rounded-lg object-cover object-center" src={product.imageSrc} alt={product.imageAlt} />
                  <div>
                    <div className="my-6 flex items-center justify-between px-4">
                      <p className="font-bold text-gray-500">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </p>
                      <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">{product.color}</p>
                      <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">{product.price}</p>
                      <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">Third option</p>
                      <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">Fourth option</p>
                      <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
            disabled={scrollPosition >= maxScrollPosition}
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}

