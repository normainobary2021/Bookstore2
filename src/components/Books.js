import './styles/Books.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBook } from '../redux/Books/Books';
import conditions from '../redux/conditions';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const load = useSelector((state) => state.books.loading);
  useEffect(() => {
    if (load === conditions.idle) dispatch(getBook());
  }, [dispatch, load]);
  return (
    <div className="books">
      {
        bookList.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <ul>
            <li className="book">
              <Book
                key={book.item_id}
                title={book.title}
                author={book.author}
                id={book.item_id}
              />
            </li>
          </ul>
        ))
}
      <hr className="line" />
      <AddBook />
    </div>
  );
};

export default Books;
