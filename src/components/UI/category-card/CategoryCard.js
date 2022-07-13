import Linkk from "../link/Linkk";
import "./CategoryCard.scss";

export default function CategoryCard({src, desc = "", content = "", path}) {
  return (
    <div className="card">
      <div className="card-overlay">
        <span>{desc}</span>
      </div>
      <img className="card-img" src={src} alt="Category cover" />
      <Linkk path={path} className={"card-btn"} content={content} />
    </div>
  );
}
