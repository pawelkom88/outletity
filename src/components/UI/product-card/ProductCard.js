import {calcDiscount} from "utilities/helpers";
import {Link} from "react-router-dom";
import {discount} from "utilities/helpers";
import "./ProductCard.scss";

export default function ProductCard({products,product}) {
  const {productPrice, discountedPrice} = calcDiscount(product);

  return (
    <Link to={`/ProductInfo/${product.id}`} state={{product,products}}>
      <div className="product-card">
        <div className="product-card-img">
          <img src={product.image} alt="Card cover" />
          <span className="product-card-discount">SAVE {discount}%</span>
        </div>
        <div className="product-card-desc">
          <h6>{product.title}</h6>
          <span>£{productPrice}</span>
          <p className="price">£{discountedPrice}</p>
        </div>
      </div>
    </Link>
  );
}
