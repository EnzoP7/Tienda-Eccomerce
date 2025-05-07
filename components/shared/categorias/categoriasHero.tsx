'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import Laptop from '@/public/images/sample-products/9.png';
import Play from '@/public/images/sample-products/play5.png';
import Monitor from '@/public/images/sample-products/Monitor.png';
import PCTorre from '@/public/images/sample-products/PCTorre.png';
import Perifericos from '@/public/images/sample-products/Perifericos.png';

const CategoriasHero = () => {
  const Categorias = [
    { nombre: 'Equipos Armados', imagen: PCTorre },
    { nombre: 'Laptops', imagen: Laptop },
    { nombre: 'Consolas', imagen: Play },
    { nombre: 'Monitores', imagen: Monitor },
    { nombre: 'Perifericos', imagen: Perifericos },
  ];

  return (
    <div className='w-full max-w-screen-xl mx-auto px-4'>
      <Carousel opts={{ align: 'start' }} className='w-full'>
        <CarouselContent className='-ml-4 flex'>
          {Categorias.map((cat, index) => (
            <CarouselItem
              key={index}
              className='pl-8 h-full basis-auto min-w-[18rem] max-w-sm'
            >
              <div className='group relative h-40 bg-white rounded-xl shadow-md overflow-hidden flex items-center px-4 cursor-pointer'>
                {/* Decoración diagonal moderna */}
                <div className='absolute -bottom-4 -right-4 w-44 h-48 bg-gradient-to-br from-orange-400 to-yellow-300 transform rotate-12 opacity-40 z-0 shadow-lg' />

                {/* Texto */}
                <div className='z-10 w-1/2'>
                  <span className='text-lg font-semibold text-gray-800 leading-tight block'>
                    {cat.nombre}
                  </span>
                </div>

                {/* Imagen con hover solo a la derecha */}
                <div className='z-10 w-[60%] flex justify-end'>
                  <Image
                    src={cat.imagen}
                    alt={cat.nombre}
                    width={170}
                    height={170}
                    className='object-contain transition-transform duration-300 transform origin-right group-hover:scale-110'
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategoriasHero;
