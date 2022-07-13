import {Link} from "react-router-dom";

export default function Linkk({path, id, onClick, content, className}) {
  return (
    <Link
      style={{textAlign: "center"}}
      to={path}
      id={id}
      onClick={onClick}
      className={`btn ${className}`}>
      {content}
    </Link>
  );
}
