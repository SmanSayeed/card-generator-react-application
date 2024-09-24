import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, setTheme } from "./features/cardSlice";
import { QRCode } from "qrcode.react";
import "./App.css";

const themes = {
  dark: "bg-gray-800 text-white",
  light: "bg-white text-black",
  green: "bg-green-200 text-black",
  blue: "bg-blue-200 text-black",
  minimal: "bg-gray-200 text-black"
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
    <div className={`p-8 min-h-screen ${themes[card.theme]}`}>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">Card Generator</h1>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" name="name" placeholder="Name" value={card.name} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="position" placeholder="Position" value={card.position} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="personalWebsite" placeholder="Personal Website" value={card.personalWebsite} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="linkedin" placeholder="LinkedIn" value={card.linkedin} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="skills" placeholder="Skills" value={card.skills} onChange={handleChange} className="p-2 border rounded" />

          <label className="block mb-2">
            Profile Image
            <input type="file" onChange={(e) => handleChange({ target: { name: 'profileImage', value: URL.createObjectURL(e.target.files[0]) } })} />
          </label>

          <label className="block mb-2">
            Theme 
            <select value={card.theme} onChange={handleThemeChange} className="p-2 border rounded">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="minimal">Minimal</option>
            </select>
          </label>
        </form>

        <div className="card mt-8 p-6 rounded-lg border shadow-sm">
          <div className="flex items-center mb-4">
            {card.profileImage && (
              <img src={card.profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
            )}
            <div>
              <h2 className="text-xl">{card.name}</h2>
              <p>{card.position}</p>
            </div>
          </div>

          <div className="mb-4">
            <a href={card.personalWebsite} target="_blank" className="block">{card.personalWebsite}</a>
            <a href={card.linkedin} target="_blank" className="block">{card.linkedin}</a>
          </div>

          <div className="mb-4">
            <p>Skills: {card.skills.split(',').map(skill => <span key={skill} className="badge bg-gray-200 p-1 rounded mr-1">{skill}</span>)}</p>
          </div>

          <div className="mt-4">
            <QRCode value={card.personalWebsite} size={64} />
            <a href={card.personalWebsite} target="_blank" className="block mt-2 text-sm">{card.personalWebsite}</a>
          </div>
        </div>

        <button onClick={downloadCard} className="mt-4 w-full p-2 bg-blue-600 text-white rounded">Download Card</button>
      </div>
    </div>
  );
}

export default App;