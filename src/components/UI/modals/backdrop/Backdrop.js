import "./Backdrop.scss";

export default function Backdrop({children, toggle}) {
  return (
    <div className="backdrop" onClick={toggle}>
      {children}
    </div>
  );
}
