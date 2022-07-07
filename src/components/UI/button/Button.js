export default function Button({id = "", type = "button", onClick, content = "", className = ""}) {
  return (
    <button id={id} type={type} onClick={onClick} className={`btn ${className}`}>
      {content}
    </button>
  );
}
