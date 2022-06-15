import Button from "components/UI/button/Button";
import "./Card.scss";

export default function Card({src, desc = "", content = "", path}) {
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
