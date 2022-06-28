import {Link} from "react-router-dom";

export default function Button({
  id = "",
  type = "button",
  onClick,
  content = "",
  className = "",
  path,
}) {
  return (
    <>
      {path ? (
        <Link
          style={{textAlign: "center"}}
          to={path}
          id={id}
          type={type}
          onClick={onClick}
          className={`btn ${className}`}>
          {content}
        </Link>
      ) : (
        <button id={id} type={type} onClick={onClick} className={`btn ${className}`}>
          {content}
        </button>
      )}
    </>
  );
}
