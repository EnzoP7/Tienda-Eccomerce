import CartTable from './cart-table';
import { getMyCart } from '@/lib/actions/cart.actions';

export const metadata = {
  title: 'Shopping Cart',
};

const CartPage = async () => {
  const cart = await getMyCart();

  return (
    <>
      <div className='flex-1 wrapper'>
        <CartTable cart={cart} />
      </div>
    </>
  );
};

export default CartPage;
