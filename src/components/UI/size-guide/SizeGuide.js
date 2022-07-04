import "./SizeGuide.scss";

export default function SizeGuide({product, selectedSize, setSelectedSize}) {
  const sizes = [8, 10, 12, 14, 16];
  


  return (
    <>
      {product && (
        <>
          <p className="select-size">Select size:</p>
          <div className="size-guide">
            {sizes.map((size, index) => (
              <span
                key={size - index}
                className={selectedSize === size ? "size sizeActive" : "size"}
                onClick={() => setSelectedSize(size)}>
                {size}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
}
