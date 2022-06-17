import "./Hamburger.scss";

export default function Hamburger({menuOpen, setMenuOpen}) {
  const isOpen = menuOpen ? "open" : "";
  const numberOfBars = new Array(3).fill("bar");

  return (
    <div className="hamburger-menu" onClick={() => setMenuOpen(prevState => !prevState)}>
      {numberOfBars.map((_, i) => (
        <div key={i} className={`menu-bar${i} ${isOpen}`}></div>
      ))}
    </div>
  );
}
