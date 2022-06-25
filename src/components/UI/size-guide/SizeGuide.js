import "./SizeGuide.scss";

export default function SizeGuide({product}) {
  const productType = ["T-Shirts", "Jacket", "Sleeve", "Slim Fit"];
  const sizes = [8, 10, 12, 14, 16];

  return (
    <>
      {product && productType.some(item => product.title.includes(item)) && (
        <>
          <p className="select-size">Select size:</p>
          <div className="size-guide">
            {sizes.map((size, index) => (
              <span key={size - index} className="size">
                {size}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
}
