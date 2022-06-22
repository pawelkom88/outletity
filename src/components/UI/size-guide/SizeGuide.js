import "./SizeGuide.scss";

export default function SizeGuide({product}) {
  const productType = ["T-Shirts", "Jacket", "Sleeve", "Slim Fit"];

  return (
    <>
      {product && productType.some(item => product.title.includes(item)) && (
        <>
          <p className="select-size">Select size:</p>
          <div className="size-guide">
            <span className="size">8</span>
            <span className="size">10</span>
            <span className="size">12</span>
            <span className="size">14</span>
            <span className="size">16</span>
          </div>
        </>
      )}
    </>
  );
}
