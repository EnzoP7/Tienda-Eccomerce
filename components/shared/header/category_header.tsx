import { PercentCircle, MapPin, Headset } from 'lucide-react';
import CategoriasMenu from '../categorias/categoriasMenu';

const CategoryHeader = () => {
  return (
    <>
      <div className='flex justify-between border-t-[0.5px] border-neutral-200 py-3 mx-auto px-20'>
        <div className='flex'>
          <CategoriasMenu />
        </div>
        <div className='flex gap-x-10'>
          <div className='flex gap-2 items-center p-2 cursor-pointer'>
            <PercentCircle />
            <p>Ofertas</p>
          </div>
          <div className='flex gap-2 items-center p-2 cursor-pointer'>
            <MapPin />
            <p>Ubicacion</p>
          </div>
          <div className='flex gap-2 items-center p-2 cursor-pointer'>
            <Headset />
            <p>Contacto</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
