import { Link } from "react-router-dom";
import "./navbar.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/view-week-details" className="nav-link">
            View Week Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
