import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, setTheme } from "../../features/cardSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  options,
  className,
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      {type === "select" ? (
        <Select
          name={name}
          value={value}
          onValueChange={(value) => onChange(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : type === "file" ? (
        <Input
          id={name}
          name={name}
          type="file"
          accept="image/*"
          onChange={(e) => onChange(e.target.files[0])}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

const CardForm = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  const handleChange = (name, value) => {
    if (name === "profileImage") {
      value = URL.createObjectURL(value);
    }
    dispatch(updateField({ field: name, value }));
  };

  const handleThemeChange = (value) => {
    dispatch(setTheme(value));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Card Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              type="text"
              label="Name"
              name="name"
              value={card.name}
              onChange={(value) => handleChange("name", value)}
            />
            <FormField
              type="text"
              label="Position"
              name="position"
              value={card.position}
              onChange={(value) => handleChange("position", value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              type="text"
              label="Personal Website"
              name="personalWebsite"
              value={card.personalWebsite}
              onChange={(value) => handleChange("personalWebsite", value)}
            />
            <FormField
              type="text"
              label="LinkedIn Username"
              name="linkedin"
              value={card.linkedin}
              onChange={(value) => handleChange("linkedin", value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              type="text"
              label="Github Username"
              name="github"
              value={card.github}
              onChange={(value) => handleChange("github", value)}
            />
            <FormField
              type="text"
              label="Skills"
              name="skills"
              value={card.skills}
              onChange={(value) => handleChange("skills", value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              type="file"
              label="Profile Image"
              name="profileImage"
              accept="image/*"
              onChange={(value) => handleChange("profileImage", value)}
            />
            <FormField
              type="select"
              label="Theme"
              name="theme"
              value={card.theme}
              onChange={handleThemeChange}
              options={[
                { value: "dark", label: "Dark" },
                { value: "light", label: "Light" },
                { value: "nature", label: "Nature" },
                { value: "ocean", label: "Ocean" },
                { value: "sunset", label: "Sunset" },
              ]}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardForm;