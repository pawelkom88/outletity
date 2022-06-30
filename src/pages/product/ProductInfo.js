import useFetch from "hooks/useFetch";
import {useParams} from "react-router-dom";
import Product from "components/UI/product/Product";
import Loader from "components/UI/loader/Loader";
import ErrorModal from "components/UI/modals/error-modal/ErrorModal";
import ProductCarousel from "components/UI/product-carousel/ProductCarousel";

export default function ProductInfo() {
  const {id} = useParams();
  const {data: product, error, loading} = useFetch(`https://fakestoreapi.com/products/${id}`);
  const {data} = useFetch(`https://fakestoreapi.com/products`);

  // type coercion

  return (
    <section>
      {error && <ErrorModal error={error} />}
      {loading && <Loader />}
      {product && <Product key={product.id} product={product} />}
      {data && <ProductCarousel data={data} />}
    </section>
  );
}
