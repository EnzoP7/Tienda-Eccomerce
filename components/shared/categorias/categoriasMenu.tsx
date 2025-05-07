import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu, AlarmSmoke } from 'lucide-react';

const CategoriasMenu = () => {
  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <button className='flex gap-2 items-center p-2'>
          <Menu />
          <span>Categorías</span>
        </button>
      </DrawerTrigger>
      <DrawerContent className='h-full max-w-sm p-4'>
        <DrawerHeader>
          <DrawerTitle>Selecciona una categoría</DrawerTitle>
        </DrawerHeader>
        <div className='space-y-2 mt-4'>
          <Button
            variant='ghost'
            className='w-full justify-start cursor-pointer'
            asChild
          >
            <DrawerClose asChild>
              <div>
                <AlarmSmoke />
                <span>Laptops</span>
              </div>
            </DrawerClose>
          </Button>
          <Button
            variant='ghost'
            className='w-full justify-start cursor-pointer'
            asChild
          >
            <DrawerClose asChild>
              <div>
                <AlarmSmoke />
                <span>Equipos Armados</span>
              </div>
            </DrawerClose>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoriasMenu;
