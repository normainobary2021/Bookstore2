import './styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar">
      <span className="nav-logo">Bookstore CMS</span>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-item active">
            {' '}
            Books
          </Link>
        </li>
        <li>
          <Link to="/catagory" className="nav-item">
            Category
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
