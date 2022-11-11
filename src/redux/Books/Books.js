import bookDetails from '../bookDetail';

const ADD = 'Bookstore2/components/books/ADD_BOOK';
const REMOVE = 'Bookstore2/components/books/REMOVE_BOOK';
const initialState = {
  books: [
    {
      id: '0',
      title: 'Dating in the 21st century',
      author: 'Norman Aine',
    },
    {
      id: '1',
      title: 'Basic Computer Programming',
      author: 'Membe Joshua',
    },
  ],
};

const adding = (state, detail) => {
  const coming = bookDetails(detail);
  const comings = [...state, coming];
  return comings;
};

const removing = (state, id) => {
  const detail = state.filter((x) => x.id !== id);
  return detail;
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return adding(state, action.detail);
    case REMOVE:
      return removing(state, action.id);
    default:
      return state;
  }
};

const addBoook = (detail) => ({ type: ADD, detail });
const removeBook = (id) => ({ type: REMOVE, id });

export { addBoook, removeBook };
export default reducer;
