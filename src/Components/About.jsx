import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import "../assets/Css/about.css";
import Web from "../assets/img/web.svg";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setImageLoaded(true);
  }, []);

  return (
    <>
      <div className="parent">
        <Card className={`card ${imageLoaded ? "animate-image" : ""}`}>
          <img src={Web} alt="profile" className="img" />
        </Card>
      </div>
    </>
  );
};

export default About;
