import "./ProductCard.scss";

export default function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src="/src/assets/png/shopping1.jpg" alt="Card cover" />
      </div>
      <div className="product-card__desc">
        <h6>Product name</h6>
        <span>RRP</span>
        <p className="price">NOW £80</p>
      </div>
    </div>
  );
}
