import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './reducers/authReducer';
import { productsReducer } from './reducers/productsReducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});
