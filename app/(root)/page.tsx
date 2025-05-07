import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import ViewAllProductsButton from '@/components/view-all-products-button';
import IconBoxes from '@/components/icon-boxes';
import DealCountdown from '@/components/deal-countdown';
import { BannerCarrucel } from '@/components/HomePage/BannerCarrucel';
import CategoriasHero from '@/components/shared/categorias/categoriasHero';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // const featuredProducts = await getFeaturedProducts();

  return (
    <>
      <BannerCarrucel />
      <CategoriasHero />
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
    </>
  );
};

export default Homepage;
