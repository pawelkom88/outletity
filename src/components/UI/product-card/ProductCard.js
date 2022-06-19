import "./ProductCard.scss";

export default function ProductCard({product}) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.src} alt="Card cover" />
        <span className="product-card-discount"> SAVE 20%</span>
      </div>
      <div className="product-card-desc">
        <h6>Product name</h6>
        <span>RRP £105</span>
        <p className="price">NOW £80</p>
      </div>
    </div>
  );
}
