import {Link} from "react-router-dom";

export default function Button({onKeyDown, onClick, content = "", className = "", path}) {
  return (
    <>
      {path ? (
        <Link to={path}>
          <button onClick={onClick} className={className}>
            {content}
          </button>
          ;
        </Link>
      ) : (
        <button onClick={onClick} className={className}>
          {content}
        </button>
      )}
    </>
  );
}
