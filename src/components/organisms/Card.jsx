import React from "react";
import { useSelector } from "react-redux";
import {
  IoLogoLinkedin,
  IoIosGlobe,
  IoLogoGithub,
  IoLogoFacebook,
} from "react-icons/io";

const themes = {
  dark: "bg-card-bg text-white",
  light: "bg-white text-black",
  green: "bg-green-200 text-black",
  blue: "bg-blue-200 text-black",
  minimal: "bg-gray-200 text-black",
};

const Card = () => {
  const profile = "profile.png";
  const card = useSelector((state) => state.card);
  const linkClass = `block text-wrap flex justify-start items-center gap-2`;

  return (
    <div
      className={`card relative w-[100%] h-[400px] p-6 border shadow-sm ${
        themes[card.theme]
      }`}
    >
      <div className="absolute inset-0 bg-card-inner pointer-events-none"></div>
      <div className="flex flex-row items-start mb-4 w-[100%] relative z-10">
        {card.profileImage && (
          <img
            src={card.profileImage || profile}
            alt="Profile"
            className="w-[80px] h-[80px] rounded-full mr-4 shadow-white"
          />
        )}
        <div>
          <h2 className="text-xl text-neon-green font-semibold">{card.name}</h2>
          <p>{card.position}</p>
        </div>
      </div>
      
      <div className="mb-4 relative z-10  text-center">
        <p className="text-sm font-semibold ">Team Member</p>
        <p className="text-md font-semibold">
          Find Web Developer (Bangladesh)
        </p>
      </div>
      
      <div className="mb-4 w-[80%] h-auto text-wrap overflow-hidden relative z-10">
        <a
          href={card.personalWebsite}
          target="_blank"
          className={`${linkClass}`}
        >
          <IoIosGlobe /> {card.personalWebsite}
        </a>
        <a href={card.linkedin} target="_blank" className={`${linkClass}`}>
          <IoLogoLinkedin /> {card.linkedin}
        </a>
        <a href={card.github} target="_blank" className={`${linkClass}`}>
          <IoLogoGithub /> {card.github}
        </a>
      </div>
      
      <div className="mb-4 relative z-10">
        <div className=" flex gap-1 flex-wrap justify-start items-center text-xs font-semibold">
          <span className="mr-2">  Skills</span>
        
          {card.skills.split(",").map((skill) => (
            <span
              key={skill}
              className="text-neon-green bg-none font-bold mr-2 shadow-sm rounded-sm text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p>Facebook Group</p>
        <a
          href={card.personalWebsite}
          target="_blank"
          className={` text-sm text-center`}
        >
          Find Web Developer (Bangladesh)
        </a>
      </div>
    </div>
  );
};

export default Card;