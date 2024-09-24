import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cardReducer from '../features/cardSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer,
  },
});

export const persistor = persistStore(store);

