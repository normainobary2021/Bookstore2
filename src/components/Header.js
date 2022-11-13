import './styles/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
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
          <Link to="/category" className="nav-item">
            Category
          </Link>
        </li>
      </ul>
    </nav>
    <span className="profile-icon">
      <Link to="/" className="nav-profile">
        <PersonIcon id="profile" />
      </Link>
    </span>
  </header>
);

export default Header;
