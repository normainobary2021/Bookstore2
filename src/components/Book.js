import './styles/Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Books';

const Book = (props) => {
  const dispatch = useDispatch();
  const remove = (e) => {
    const bookId = e.target.id;
    dispatch(removeBook(bookId));
  };

  const {
    id, title, author,
  } = props;
  return (
    <div className="book-card">
      <div className="book-details">
        <div className="book-category">
          <span>Computer</span>
        </div>
        <div className="book-title">
          <span>{title}</span>
        </div>
        <div className="book-author">
          <span>{author}</span>
        </div>
        <div className="actions">
          <ul className="actions-list">
            <li>
              <button type="button">
                Comments
              </button>
            </li>
            <li>
              <button type="button" id={id} onClick={remove}>Remove</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
