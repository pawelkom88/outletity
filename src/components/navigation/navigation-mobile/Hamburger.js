import "./Hamburger.scss";

export default function Hamburger({menuIsOpen, setMenuIsOpen}) {
  const isOpen = menuIsOpen ? "open" : "";
  const numberOfBars = new Array(3).fill("bar");

  return (
    <div className="hamburger-menu" onClick={() => setMenuIsOpen(prevState => !prevState)}>
      {numberOfBars.map((_, i) => (
        <div key={i} className={`menu-bar${i} ${isOpen}`}></div>
      ))}
    </div>
  );
}
