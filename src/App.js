import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Category from './components/Category';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container" id="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catagory" element={<Category />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
