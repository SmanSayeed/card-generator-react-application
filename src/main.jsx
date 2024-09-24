import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import cardReducer from './features/cardSlice';

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
const persistor = persistStore(store);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
