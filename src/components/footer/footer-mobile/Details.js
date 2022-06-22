import "./Details.scss";

export default function Details({children, title = ""}) {
  return (
    <details className="footer-mobile-details">
      <summary className="footer-mobile-summary ">{title}</summary>
      {children}
    </details>
  );
}
