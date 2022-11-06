import './styles/AddBook.css';

const AddBook = () => (
  <div className="form-container">
    <span className="add-title"> Add New Book</span>
    <form className="add-form">
      <input placeholder="Book Title" className="title-inp" />
      <input placeholder="Author" className="author-inp" />
      <button type="button" className="addbook-btn">
        Add Book
      </button>
    </form>
  </div>
);

export default AddBook;
