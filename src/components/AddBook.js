import './styles/AddBook.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/Books';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: 0,
  });

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    e.target.reset();
  };

  const titleChange = (e) => {
    e.persist();
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      title: value,
    }));
  };

  const authorChange = (e) => {
    e.persist();
    const { value } = e.target;
    setBook((e) => ({
      ...e,
      author: value,
    }));
  };

  return (
    <div className="form-container" onSubmit={submit}>
      <span className="add-title"> Add New Book</span>
      <form className="add-form">
        <input placeholder="Book Title" className="title-inp" onChange={titleChange} />
        <input placeholder="Author" className="author-inp" onChange={authorChange} />
        <button type="submit" className="addbook-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
