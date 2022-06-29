import "./SizeGuide.scss";

export default function SizeGuide({product, setSelectedSize}) {
  const productType = ["T-Shirts", "T Shirt", "Jacket", "Sleeve", "Slim Fit"];
  const sizes = [8, 10, 12, 14, 16];

  return (
    <>
      {product && productType.some(item => product.title.includes(item)) && (
        <>
          <p className="select-size">Select size:</p>
          <div className="size-guide">
            {sizes.map((size, index) => (
              <span key={size - index} className="size" onClick={() => setSelectedSize(size)}>
                {size}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
}
