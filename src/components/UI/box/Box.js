import "./Box.scss";

export default function Box({children, content}) {
  return (
    <section className="container">
      <div className="wrapper">
        <header className="wrapper-header">
          <h4>{content}</h4>
        </header>
        {children}
      </div>
    </section>
  );
}
