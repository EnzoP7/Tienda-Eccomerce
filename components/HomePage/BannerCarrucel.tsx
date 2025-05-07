'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import Banner1 from '@/public/images/banners/Banner1.jpg';
import Banner2 from '@/public/images/banners/Banner2.jpg';
import Banner3 from '@/public/images/banners/Banner3.jpg';

import Banner1_Chico from '@/public/images/banners/Banner1_Chico.jpg';
import Banner2_Chico from '@/public/images/banners/Banner2_chico.png';
import Banner3_Chico from '@/public/images/banners/Banner3_Chico.jpg';
// import Banner4 from '@/public/images/banners/Banner4.jpg';

export function BannerCarrucel(): JSX.Element {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <>
      {/* Carrusel para pantallas pequeñas (mobile) */}
      <div className='relative w-screen h-[450px] sm:h-[500px] overflow-hidden sm:block md:hidden'>
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          className='w-full h-full'
        >
          <CarouselContent className='h-full'>
            {[Banner1_Chico, Banner2_Chico, Banner3_Chico].map(
              (banner, index) => (
                <CarouselItem key={index} className='relative h-full'>
                  <Image
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    className=''
                    priority={index === 0}
                    sizes='100vw'
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>

          {/* Flechas de navegación */}
          <CarouselPrevious className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white'>
            <span className='sr-only'>Anterior</span>
          </CarouselPrevious>
          <CarouselNext className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white'>
            <span className='sr-only'>Siguiente</span>
          </CarouselNext>
        </Carousel>
      </div>

      {/* Carrusel alternativo (solo visible en formato tablet: md) */}
      <div className='w-screen h-[300px] xl:h-[500px] overflow-hidden hidden md:block'>
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          className='w-full h-[500px]'
        >
          <CarouselContent className='h-full'>
            {[Banner1, Banner2, Banner3].map((banner, index) => (
              <CarouselItem key={index} className='relative h-[500px]'>
                <Image
                  src={banner}
                  alt={`Banner Tablet ${index + 1}`}
                  className='object-cover'
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
