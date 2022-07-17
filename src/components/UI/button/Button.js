export default function Button({
  id = "",
  type = "button",
  onClick,
  content = "",
  className = "",
  isDisabled = false,
}) {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      disabled={isDisabled}>
      {content}
    </button>
  );
}
