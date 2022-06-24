import {useParams} from "react-router-dom";
import ProductCard from "components/UI/product-card/ProductCard";
import Button from "components/UI/button/Button";
import Loader from "components/UI/loader/Loader";
import {sort} from "utilities/images";
import ErrorModal from "components/UI/modals/error-modal/ErrorModal";
import "./Products.scss";

export default function Products({data, error, loading}) {
  const {category} = useParams();
  let filteredProducts;
  let categoryName;

  if (data && category) {
    filteredProducts = data.filter(productList => productList.category === category);
    categoryName = filteredProducts[0].category.toUpperCase();
  } else {
    filteredProducts = data;
  }

  return (
    <section>
      {error && <ErrorModal error={error} />}
      {loading && <Loader />}
      {filteredProducts && (
        <>
          <h2 className="heading">{filteredProducts === data ? "All products" : categoryName}</h2>
          <div className="category-sortable-panel">
            <div className="panel-options">
              <span>Sort by</span>
              <img src={sort} alt="Sort icon" />
              <Button content="title" id="dark-background" />
              <Button content="price" id="dark-background" />
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
