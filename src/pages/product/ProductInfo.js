import {useLocation} from "react-router-dom";
import useFetch from "hooks/useFetch";
import Product from "components/UI/product/Product";
import ProductCarousel from "components/UI/product-carousel/ProductCarousel";

export default function ProductInfo() {
  const location = useLocation();
  const {product} = location.state || {};

  const {data} = useFetch(`https://fakestoreapi.com/products`);

  return (
    <section>
      {product && <Product key={product.id} product={product} />}
      {data ? <ProductCarousel data={data} /> : 'Loading'}
    </section>
  );
}
