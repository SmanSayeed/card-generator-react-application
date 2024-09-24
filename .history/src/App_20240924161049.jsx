import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setTheme } from './features/cardSlice';
import './App.css';

const themes = {
  dark: "bg-gray-800 text-white",
  light: "bg-white text-black",
  green: "bg-green-200 text-black",
  blue: "bg-blue-200 text-black",
  minimal: "bg-gray-200 text-black",
};

function App() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  const downloadCard = () => {
    // Implement download functionality
  };

  return (
    <>
    </>
   
  );
}

export default App;