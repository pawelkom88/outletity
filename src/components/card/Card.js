import Button from "components/button/Button";
import "./Card.scss";

export default function Card({src, desc, content}) {
  return (
    <div className="card">
      <div className="card-overlay">
        <span>{desc}</span>
      </div>
      <img className="card-img" src={src} alt="Category cover" />
      <Button className={"card-btn"} content={content} />
    </div>
  );
}
