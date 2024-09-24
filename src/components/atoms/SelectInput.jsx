import React from 'react';

const SelectInput = ({ label, name, value, onChange, options }) => (
  <div className="mb-1">
    {label && <label className="block text-sm mb-1">{label}</label>}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="p-2 bg-gray-800 border rounded w-full"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;