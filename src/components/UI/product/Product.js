import SizeGuide from "components/UI/size-guide/SizeGuide";
import Button from "components/UI/button/Button";
import "./Product.scss";
import useDiscount from "hooks/useDiscount";

export default function Product({product}) {

  const {discount, productPrice, discountedPrice} = useDiscount(product);

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={product.image} alt="Product" />
      </div>
      <article className="product-content">
        <header>
          <h2 className="product-title">{product.title}</h2>
          <span className="product-rating">Customers rating: {product.rating.rate}</span>
        </header>
        <p className="product-desc">{product.description}</p>
        <div className="product-price">
          <div className="price">
            <span>£{productPrice}</span>
            <span>Now: £{discountedPrice}</span>
          </div>
          <span className="discount">SAVE {discount} %</span>
        </div>
        <SizeGuide product={product} />
        <Button content="Add to basket" id="dark-background" />
      </article>
    </div>
  );
}
