import React from "react";
import html2canvas from "html2canvas";
import CardForm from "../organisms/CardForm";
import Card from "../organisms/Card";
import Button from "../atoms/Button";

const CardGenerator = () => {
  const downloadCard = () => {
    const input = document.getElementById("card");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "card.png";
      link.click();
    });
  };

  return (
    <div className="max-w-xs  border">
      <div id="card">
        <Card />
      </div>
      <Button onClick={downloadCard}>Download Card</Button>
    </div>
  );
};

export default CardGenerator;