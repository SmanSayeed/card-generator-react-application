import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    name: '',
    position: '',
    profileImage: '',
    personalWebsite: '',
    linkedin: '',
    skills: '',
    theme: 'dark' // default theme
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cardSlice.reducer);

export const { updateField, setTheme } = cardSlice.actions;
export default persistedReducer;