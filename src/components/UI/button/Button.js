import {Link} from "react-router-dom";

export default function Button({type = "button", onClick, content = "", className = "", path}) {
  return (
    <>
      {path ? (
        <Link to={path}>
          <button type={type} onClick={onClick} className={className}>
            {content}
          </button>
          ;
        </Link>
      ) : (
        <button type={type} onClick={onClick} className={className}>
          {content}
        </button>
      )}
    </>
  );
}
