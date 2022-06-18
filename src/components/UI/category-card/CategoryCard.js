import Button from "components/UI/button/Button";
import "./CategoryCard.scss";

export default function CategoryCard({src, desc = "", content = "", path}) {
  return (
    <div className="card">
      <div className="card-overlay">
        <span>{desc}</span>
      </div>
      <img className="card-img" src={src} alt="Category cover" />
      <Button path={path} className={"card-btn"} content={content} />
    </div>
  );
}
