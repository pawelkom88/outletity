import {Link} from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__items">
        <Link to="/Mens">
          <li className="nav-bar__item">Men's clothing</li>
        </Link>
        <Link to="Womens">
          <li className="nav-bar__item">Women's clothing</li>
        </Link>

        <Link to="/Electronics">
          <li className="nav-bar__item">Electronics</li>
        </Link>
        <Link to="/Jewelery">
          <li className="nav-bar__item">Jewelery</li>
        </Link>
      </ul>
    </nav>
  );
}
