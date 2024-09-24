import React from 'react';
import { useSelector } from 'react-redux';

const themes = {
  dark: 'bg-gray-800 text-white',
  light: 'bg-white text-black',
  green: 'bg-green-200 text-black',
  blue: 'bg-blue-200 text-black',
  minimal: 'bg-gray-200 text-black',
};

const Card = () => {
  const card = useSelector((state) => state.card);

  return (
    <div className={`card mt-8 p-6 rounded-lg border shadow-sm ${themes[card.theme]}`}>
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
        <a href={card.personalWebsite} target="_blank" className="block">
          {card.personalWebsite}
        </a>
        <a href={card.linkedin} target="_blank" className="block">
          {card.linkedin}
        </a>
      </div>

      <div className="mb-4">
        <p>
          Skills: {card.skills.split(',').map((skill) => (
            <span key={skill} className="badge bg-gray-200 text-black p-1 rounded mr-1">
              {skill}
            </span>
          ))}
        </p>
      </div>

      <div className="mt-4">
        <QRCode value={card.personalWebsite} size={64} />
        <a href={card.personalWebsite} target="_blank" className="block mt-2 text-sm">
          {card.personalWebsite}
        </a>
      </div>
    </div>
  );
};

export default Card;