import './styles/Books.css';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <div className="books">
    <ul>
      <li className="book">
        <Book title="Dating in the 21st century" author="Norman Aine" category="Love" />
      </li>
      <li className="book">
        <Book title="Basic Computer Programming" author="Membe Joshua" category="Computer Science" />
      </li>
    </ul>
    <hr className="line" />
    <AddBook />
  </div>
);

export default Books;
