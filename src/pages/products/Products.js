import ProductCard from "components/UI/product-card/ProductCard";
import Button from "components/UI/button/Button";
import "./Products.scss";
import {sort} from "utilities/images";

export default function Products() {
  return (
    <section>
      <h2 className="heading">Category Name</h2>
      <div className="category-sortable-panel">
        <div className="panel-options">
          <span>Sort by</span>
          <img src={sort} alt="Sort icon" />
          <Button content="title" className="black" />
          <Button content="price" className="black" />
          <Button content="discount" className="black" />
        </div>
        <span>99 items available</span>
      </div>
      <div className="category-products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
