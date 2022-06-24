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
        <Link to={path}>
          <button id={id} type={type} onClick={onClick} className={`btn ${className}`}>
            {content}
          </button>
          ;
        </Link>
      ) : (
        <button id={id} type={type} onClick={onClick} className={`btn ${className}`}>
          {content}
        </button>
      )}
    </>
  );
}
