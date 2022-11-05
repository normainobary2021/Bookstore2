import './styles/Book.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <div className="book-card">
      <div className="book-details">
        <div className="book-category">
          <span>{category}</span>
        </div>
        <div className="book-title">
          <span>{title}</span>
        </div>
        <div className="book-author">
          <span>{author}</span>
        </div>
        <div className="actions">
          <ul className="actions-list">
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
