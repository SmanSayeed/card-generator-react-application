import React from 'react';

const FileInput = ({ label, name, onChange }) => (
  <div className="mb-4">
    {label && <label className="block text-sm mb-1">{label}</label>}
    <input
      type="file"
      name={name}
      onChange={onChange}
      className="mt-1 p-2 bg-gray-800 border rounded w-full"
    />
  </div>
);

export default FileInput;