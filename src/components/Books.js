import './styles/Books.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div className="books">
      {bookList.map((b) => (
        // eslint-disable-next-line react/jsx-key
        <ul>
          <li className="book">
            <Book
              title={b.title}
              author={b.author}
              id={b.id}
            />
          </li>
        </ul>
      ))}
      <hr className="line" />
      <AddBook />
    </div>
  );
};

export default Books;
