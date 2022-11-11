import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/Books';
import categoriesReducer from './Categories/Categories';

const reducers = {
  Books: booksReducer,
  Categories: categoriesReducer,
};

const store = configureStore({
  reducers,
});

export default store;
