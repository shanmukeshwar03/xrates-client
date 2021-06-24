import { configureStore } from '@reduxjs/toolkit';
import currency from 'redux/currency';

export default configureStore({
  reducer: currency,
});
