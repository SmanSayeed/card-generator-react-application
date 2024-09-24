import React from 'react';

const Button = ({ onClick, children, ...props }) => (
  <button
    onClick={onClick}
    className="mt-5 w-full p-2 bg-blue-600 text-white rounded"
    {...props}
  >
    {children}
  </button>
);

export default Button;