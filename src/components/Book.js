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
      <div className="book-detail">
        <div className="book-category">
          <span>Analyze Data</span>
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

      <div className="progress-detail">
        <div className="progress-bar" />
        <div className="progress-percentage">
          <span className="percent">72%</span>
          <span className="completed">Completed</span>
        </div>
      </div>

      <div className="chapter-detail">
        <span className="current-chapter">current chapter</span>
        <span className="chapter">Chapter 17</span>
        <button type="button" className="update-btn">Update progress</button>
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
