import "./Box.scss";

export default function Box({children, content}) {
  return (
    <section className="container">
      <div className="wrapper">
        <header className="wrapper-header">
          <h3 className='wrapper-header__heading'>{content}</h3>
        </header>
        {children}
      </div>
    </section>
  );
}
