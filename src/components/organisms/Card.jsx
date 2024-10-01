import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe, Linkedin, Github, Facebook } from "lucide-react";

const themes = {
  dark: "bg-gray-900 text-white",
  light: "bg-white text-gray-900",
  nature: "bg-gradient-to-br from-green-400 to-blue-500 text-white",
  ocean: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white",
  sunset:
    "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white",
  neonDreams:
    "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg shadow-pink-500/50",
  frostyMint:
    "bg-gradient-to-br from-teal-300 via-lime-300 to-emerald-500 text-gray-800 shadow-md shadow-emerald-300/30",
  cosmicFusion:
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-700 via-purple-500 to-pink-500 text-white shadow-xl shadow-purple-500/30",
  goldenHour:
    "bg-gradient-to-bl from-amber-200 via-yellow-400 to-orange-500 text-gray-900 shadow-md shadow-orange-300/40",
  northernLights:
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50",
};

const ProfileCard = forwardRef((props, ref) => {
  const card = useSelector((state) => state.card);
  const theme = useSelector((state) => state.card.theme);

  const baseTextClass = "text-current";
  const linkClass = `${baseTextClass} flex items-center gap-2 text-sm hover:underline transition-colors duration-200`;
  const badgeClass = `${
    theme === "light" ? "bg-black bg-opacity-10" : "bg-white bg-opacity-30"
  } text-current hover:bg-opacity-100 hover:text-white font-bold transition-all duration-200`;
  const sectionClass = `${
    theme === "light" ? "bg-black" : "bg-white"
  } bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-50`;

  return (
    <Card
      ref={ref}
      className={`w-full max-w-md mx-auto overflow-hidden shadow-lg ${
        themes[theme] || themes.light
      }`}
    >
      <CardHeader className="flex flex-col items-center gap-4 pb-6">
        <Avatar className="w-24 h-24 border-4 border-current shadow-md">
          <AvatarImage src={card.profileImage} alt="Profile" />
          <AvatarFallback className="text-3xl font-bold bg-gray-200 text-gray-900">
            {card.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="text-center space-y-1">
          <h2 className={`${baseTextClass} text-2xl font-bold`}>
            {card.name || "Your Name"}
          </h2>
          <p className={`${baseTextClass} text-lg`}>
            {card.position || "Your Position"}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className={`text-center ${sectionClass} py-3 px-4 rounded-md`}>
          <p className={`${baseTextClass} text-sm font-semibold mb-1`}>
            Team Member
          </p>
          <p className={`${baseTextClass} text-lg font-bold`}>
            Find Web Developer (Bangladesh)
          </p>
        </div>
       
        <div className="space-y-2 px-4">
          {card.linkedin && (
            <a
              href={`https://linkedin.com/in/${card.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
            
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2" />
                <span className="truncate">
                  {card.linkedin.length > 25
                    ? `${card.linkedin.slice(0, 25)}`
                    : card.linkedin}
                </span>
              </div>
            </a>
          )}
          {card.github && (
            <a
              href={`https://github.com/${card.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
             
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-2" />
                <span className="truncate">
                  {card.github.length > 25
                    ? `${card.github.slice(0, 25)}`
                    : card.github}
                </span>
              </div>
            </a>
          )}
          {card.personalWebsite && (
            <a
              href={card.personalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
             
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span className="truncate">
                  {card.personalWebsite.length > 25
                    ? `${card.personalWebsite.slice(0, 25)}`
                    : card.personalWebsite}
                </span>
              </div>
            </a>
          )}
        </div>

        <div className="flex item-center justify-center">
        <div>
        {card.skills && (
          <div className="px-4">
            <p className={`${baseTextClass} font-bold mb-2 text-lg`}>Skills</p>
            <div className="flex flex-wrap gap-2">
              {card.skills.split(",").map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`${badgeClass} ${
                    theme === "light"
                      ? "hover:bg-gray-900"
                      : theme === "dark"
                      ? "hover:bg-white hover:text-gray-900"
                      : "hover:bg-white hover:text-gray-900"
                  } px-2 py-1 text-xs whitespace-nowrap overflow-hidden`}
                >
                  {skill.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}
        </div>
       </div>

       
      </CardContent>
      <CardFooter
        className={`flex flex-col items-center ${sectionClass} mt-4 py-3`}
      >
        {/* <p className={`${baseTextClass} text-sm mb-1`}> Facebook Group</p> */}
        <a
          href="https://www.facebook.com/groups/1371141593218964"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} font-bold`}
        >
          <Facebook className="w-5 h-5" /> Find Web Developer (Bangladesh)
        </a>
      </CardFooter>
    </Card>
  );
});

ProfileCard.displayName = "ProfileCard";

export default ProfileCard;
