import {useState, useEffect} from "react";
import useFetch from "hooks/useFetch";
import {useParams} from "react-router-dom";
import ProductCard from "components/UI/product-card/ProductCard";
import Button from "components/UI/button/Button";
import Loader from "components/UI/loader/Loader";
import {sort} from "utilities/images";
import ErrorModal from "components/UI/modals/error-modal/ErrorModal";
import "./Products.scss";

export default function Products() {
  const {category} = useParams();
  const {
    data: products,
    error,
    loading,
  } = useFetch(`https://fakestoreapi.com/products/category/${category}`);

  const [filteredProducts, setFilteredProducts] = useState(null);

  // set filtered products when data is fetched
  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <section>
      {error && <ErrorModal error={error} />}
      {loading && <Loader />}
      {filteredProducts && (
        <>
          <h2 className="heading">{products && products[0].category.toUpperCase()}</h2>
          <div className="category-sortable-panel">
            <div className="panel-options">
              <span>Sort by</span>
              <img src={sort} alt="Sort icon" />
              <Button
                content="title"
                id="dark-background"
                onClick={() => setFilteredProducts(sortByTitle(filteredProducts))}
              />
              <Button
                content="price (cheapest)"
                id="dark-background"
                onClick={() => setFilteredProducts(sortByPrice(filteredProducts))}
              />
              <Button
                content="price (most expensive)"
                id="dark-background"
                onClick={() => setFilteredProducts(sortByPrice(filteredProducts, "desc"))}
              />
            </div>
            <span className="product-quantity">
              {filteredProducts.length} {filteredProducts.length > 1 ? "products" : "product"}
            </span>
          </div>
          <div className="category-products">
            {filteredProducts.map(product => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}

function sortByTitle(products) {
  const productsCopy = [...products];
  return productsCopy.sort((productA, productB) => productA.title.localeCompare(productB.title));
}

function sortByPrice(products, order) {
  const productsCopy = [...products];

  if (order === "desc") {
    return productsCopy.sort((productA, productB) => productB.price - productA.price);
  }
  return productsCopy.sort((productA, productB) => productA.price - productB.price);
}
