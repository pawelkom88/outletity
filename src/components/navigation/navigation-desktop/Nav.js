import {Link} from "react-router-dom";
import {categories} from "utilities/images";

import "./Nav.scss";

export default function Nav({menuIsOpen, closeMobileMenu}) {
  return (
    <nav className="nav-bar" aria-labelledby={menuIsOpen ? "hamburger" : ""}>
      <ul className="nav-bar__items">
        {categories.map(link => {
          return (
            <li key={link.id} className="nav-bar__item">
              <Link to={`/Products${link.path}`} onClick={menuIsOpen ? closeMobileMenu : undefined}>
                {link.desc}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
