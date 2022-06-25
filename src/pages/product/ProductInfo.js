import {useParams} from "react-router-dom";
import Product from "components/UI/product/Product";
import Loader from "components/UI/loader/Loader";
import ErrorModal from "components/UI/modals/error-modal/ErrorModal";

export default function ProductInfo({data, error, loading}) {
  const {id} = useParams();

  let filteredProduct;

  // type coercion
  if (data && id) {
    filteredProduct = data.filter(product => product.id == id);
  }

  return (
    <section>
      {error && <ErrorModal error={error} />}
      {loading && <Loader />}

      {filteredProduct &&
        filteredProduct.map(product => {
          return <Product key={product.id} product={product} />;
        })}
    </section>
  );
}
