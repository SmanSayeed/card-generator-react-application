import React from 'react';
import CardForm from '../organisms/CardForm';
import Card from '../organisms/Card';
import Button from '../atoms/Button';

const CardGenerator = () => {
  const downloadCard = () => {
    // Implement download functionality
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl mb-4">Card Generator</h1>
      <CardForm />
      <Card />
      <Button onClick={downloadCard}>Download Card</Button>
    </div>
  );
};

export default CardGenerator;