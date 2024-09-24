import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setTheme } from './features/cardSlice';
import './App.css';
import CardGenerator from './components/template/CardGenerator';

const themes = {
  dark: "bg-gray-800 text-white",
  light: "bg-white text-black",
  green: "bg-green-200 text-black",
  blue: "bg-blue-200 text-black",
  minimal: "bg-gray-200 text-black",
};

function App() {
 
  return (
    <div className="p-8 min-h-screen bg-gray-800 text-white">
    <CardGenerator />
  </div>
  );
}

export default App;