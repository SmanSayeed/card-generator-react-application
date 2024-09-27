import React, { useRef, useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import Card from "../organisms/Card";
import { Button } from "@/components/ui/button";
import { Card as ShadcnCard, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const CardGenerator = () => {
  const cardRef = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  const downloadCard = () => {
    if (cardRef.current && fontsLoaded) {
      domtoimage.toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "profile-card.png";
          link.click();
        })
        .catch((error) => {
          console.error("Oops, something went wrong!", error);
        });
    }
  };

  return (
    <ShadcnCard className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div id="card" className="mb-6">
          <Card ref={cardRef} />
        </div>
        <Button onClick={downloadCard} className="w-full" disabled={!fontsLoaded}>
          <Download className="mr-2 h-4 w-4" /> Download Card
        </Button>
      </CardContent>
    </ShadcnCard>
  );
};

export default CardGenerator;
