import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "./components/ui/theme-provider"
import App from './App'
import cardReducer from './features/cardSlice'
import './index.css'

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
})

const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)