import "./ProductCard.scss";

export default function ProductCard({product}) {
  const discount = ((product.rating.rate * 10) / 2).toFixed();
  const productPrice = Math.round(product.price.toFixed(2));
  const discountedPrice = productPrice - (productPrice * discount) / 100;

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt="Card cover" />
        <span className="product-card-discount">{discount}%</span>
      </div>
      <div className="product-card-desc">
        <h6>{product.title}</h6>
        <span>£{productPrice}</span>
        <p className="price">£{discountedPrice}</p>
      </div>
    </div>
  );
}
