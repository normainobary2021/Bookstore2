import './styles/Category.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';

const Category = () => {
  const dispatch = useDispatch();
  const testStatus = () => {
    dispatch(checkStatus());
  };
  const status = useSelector((state) => state.category);
  return (
    <div className="categories">
      <button type="button" className="status-btn" onClick={testStatus}>
        Check Status
      </button>
      <h2>
        {status}
      </h2>
    </div>
  );
};

export default Category;
