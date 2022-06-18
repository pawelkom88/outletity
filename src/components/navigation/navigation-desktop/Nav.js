import {Link} from "react-router-dom";
import {categories} from "utilities/images";
import "./Nav.scss";

export default function NavDesktop({setMenuOpen}) {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__items">
        {categories.map(link => {
          return (
            <Link key={link.id} to={link.path} onClick={() => setMenuOpen(false)}>
              <li className="nav-bar__item">{link.desc}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
