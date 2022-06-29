import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProductCard from "components/UI/product-card/ProductCard";
import Button from "components/UI/button/Button";
import Loader from "components/UI/loader/Loader";
import {sort} from "utilities/images";
import ErrorModal from "components/UI/modals/error-modal/ErrorModal";
import "./Products.scss";

export default function Products({data, error, loading}) {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const {category} = useParams();

  useEffect(() => {
    function sortById(products) {
      return products.filter(productList => productList.category === category);
    }

    if (data && category) {
      setFilteredProducts(sortById(data));
    } else {
      setFilteredProducts(data);
    }
  }, [data, category]);

  function sortByTitle(products) {
    return products.sort((productA, productB) => productA.title.localeCompare(productB.title));
  }

  function sortByPrice(products, order) {
    if (order === "desc") {
      return products.sort((productA, productB) => productB.price - productA.price);
    }
    return products.sort((productA, productB) => productB.price + productA.price);
  }

  return (
    <section>
      {error && <ErrorModal error={error} />}
      {loading && <Loader />}
      {filteredProducts && (
        <>
          <h2 className="heading">
            {/* {category ? filteredProducts[0].category.toUpperCase() : "ALL PRODUCTS"} */}
          </h2>
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
                onClick={() => setFilteredProducts(sortByPrice(filteredProducts, "asc"))}
              />
              <Button
                content="price (most expensive)"
                id="dark-background"
                onClick={() => setFilteredProducts(sortByPrice(filteredProducts, "desc"))}
              />
              <Button content="discount" id="dark-background" />
            </div>
            <span className="product-quantity">
              {filteredProducts.length} {filteredProducts.length > 1 ? "products" : "product"}
            </span>
          </div>
          <div className="category-products">
            {filteredProducts.map(product => {
              return <ProductCard key={product.id} product={product} category={category} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
