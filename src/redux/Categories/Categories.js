const initalState = {
  categories: [],
};

const CHECKING_STATUS = 'Bookstore2/components/categories/CHECKING_STATUS';

const status = () => 'Under construction';

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHECKING_STATUS: return status();
    default: return state;
  }
};

const checkStatus = () => ({ type: CHECKING_STATUS });

export default reducer;
export { checkStatus };
