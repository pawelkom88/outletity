import {useLocation} from "react-router-dom";
import Product from "components/product/Product";

export default function ProductInfo() {
  const location = useLocation();
  const {product} = location.state || {};

  return <section>{product && <Product key={product.id} product={product} />}</section>;
}
