import React from 'react';

const TextInput = ({ label, name, value, onChange, ...props }) => (
  <div className="mb-1">
    {label && <label className="block text-sm mb-1">{label}</label>}
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="p-1 bg-gray-800 border rounded w-full"
      {...props}
    />
  </div>
);

export default TextInput;