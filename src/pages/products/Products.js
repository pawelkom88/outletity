import {useParams} from "react-router-dom";
import ProductCard from "components/UI/product-card/ProductCard";
import Button from "components/UI/button/Button";
import {sort} from "utilities/images";
import "./Products.scss";

export default function Products({data}) {
  const {category} = useParams();
  let filteredProducts;

  if (data && category) {
    filteredProducts = data.filter(productList => productList.category === `${category}`);
  } else {
    filteredProducts = data;
  }

  return (
    <section>
      {filteredProducts ? (
        <>
          <h2 className="heading">
            {filteredProducts === data ? "All products" : filteredProducts.category}
          </h2>
          <div className="category-sortable-panel">
            <div className="panel-options">
              <span>Sort by</span>
              <img src={sort} alt="Sort icon" />
              <Button content="title" className="background" />
              <Button content="price" className="background" />
              <Button content="discount" className="background" />
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
      ) : (
        "loading"
      )}
    </section>
  );
}
