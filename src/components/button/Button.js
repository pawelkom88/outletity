import {Link} from "react-router-dom";

export default function Button({onClick, content = "", className = "", path = "#"}) {
  return (
    <Link to={path}>
      <button onClick={onClick} className={className}>
        {content}
      </button>
      ;
    </Link>
  );
}
