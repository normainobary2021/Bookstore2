import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Category from './components/Category';

function App() {
  return (
    <div className="bookstore">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catagory" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
