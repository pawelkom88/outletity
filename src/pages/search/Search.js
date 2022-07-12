import useFetch from "hooks/useFetch";
import Loader from "components/UI/loader/Loader";
import Modal from "components/UI/modals/modal/Modal";
import ProductCard from "components/UI/product-card/ProductCard";
import useModal from "hooks/useModal";
import {useLocation} from "react-router-dom";
import "./Search.scss";

export default function Search() {
  const {data: products, error, loading} = useFetch("https://fakestoreapi.com/products/");
  const {toggle} = useModal();
  const location = useLocation();
  const {searchInput} = location.state || {};

  let searchResult;

  if (products) {
    searchResult = products.filter(product => product.title.toLowerCase().includes(searchInput));
  }

  return (
    <>
      {products && (
        <section className="search-result">
          {error && <Modal toggle={toggle} heading="Something went wrong..." error={error} />}
          {loading && <Loader />}
          <div className="search-results__heading">
            {searchResult.length && (
              <h3>{searchResult.length === 1 ? "Search result:" : "Search results:"}</h3>
            )}
            <div className="category-products">
              {searchResult.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          {!searchResult.length && <h2 className="not-found">Product not found</h2>}
        </section>
      )}
    </>
  );
}
