import {CartContext} from "context/CartContext";
import {useLocation} from "react-router-dom";
import Loader from "components/UI/loader/Loader";
import ProductCard from "components/UI/product-card/ProductCard";
import {Toaster} from "react-hot-toast";
import "./Search.scss";

export default function Search() {
  const {products} = CartContext();
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
          {!products && <Loader />}
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
          <Toaster position="top-center" />
        </section>
      )}
    </>
  );
}
