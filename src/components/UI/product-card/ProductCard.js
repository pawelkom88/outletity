import {calcDiscount} from "utilities/helpers";
import {Link} from "react-router-dom";
import "./ProductCard.scss";

export default function ProductCard({product}) {
  const {discount, productPrice, discountedPrice} = calcDiscount(product);

  return (
    <Link to={`/ProductInfo/${product.id}`} state={{product}}>
      <div className="product-card">
        <div className="product-card-img">
          <img src={product.image} alt="Card cover" />
          <span className="product-card-discount">SAVE {discount}%</span>
        </div>
        <div className="product-card-desc">
          <h6>{product.title.substring(0, 50)} ...</h6>
          <span>£{productPrice}</span>
          <p className="price">£{discountedPrice}</p>
        </div>
      </div>
    </Link>
  );
}
