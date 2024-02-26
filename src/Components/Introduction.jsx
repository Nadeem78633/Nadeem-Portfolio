import React, { useState, useEffect } from "react";
import { Avatar, Typography } from "@mui/material";
import "../assets/Css/introduction.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Introduction = () => {
  const [nameLetters, setNameLetters] = useState([]);
  const [companyLetters, setCompanyLetters] = useState([]);
  const [locationLetters, setLocationLetters] = useState([]);
  const [educationLetters, setEducationLetters] = useState([]);

  useEffect(() => {
    const name = "Mohd Nadeem";
    const company = "Ha It Solutions .";
    const location = "Bareilly Uttar Pradesh ( India ) .";
    const education = "B.tech ( Computer Science ) .";

    const nameLetters = name.split("");
    const companyLetters = company.split("");
    const locationLetters = location.split("");
    const educationLetters = education.split("");

    const animationDelay = 0.1; // Adjust as needed
    const animationDuration = 1; // Adjust as needed

    const animatedName = nameLetters.map((letter, index) => (
      <span
        key={index}
        className="animated-letter"
        style={{
          animationDelay: `${index * animationDelay}s`,
          animationDuration: `${animationDuration}s`,
        }}
      >
        {letter}
      </span>
    ));

    const animatedCompany = companyLetters.map((letter, index) => (
      <span
        key={index}
        className="animated-letter"
        style={{
          animationDelay: `${(index + nameLetters.length) * animationDelay}s`,
          animationDuration: `${animationDuration}s`,
        }}
      >
        {letter}
      </span>
    ));
    const animatedLocation = locationLetters.map((letter, index) => (
      <span
        key={index}
        className="animated-letter"
        style={{
          animationDelay: `${
            (index + locationLetters.length) * animationDelay
          }s`,
          animationDuration: `${animationDuration}s`,
        }}
      >
        {letter}
      </span>
    ));
    const animatedEducation = educationLetters.map((letter, index) => (
      <span
        key={index}
        className="animated-letter"
        style={{
          animationDelay: `${
            (index + educationLetters.length) * animationDelay
          }s`,
          animationDuration: `${animationDuration}s`,
        }}
      >
        {letter}
      </span>
    ));

    setNameLetters(animatedName);
    setCompanyLetters(animatedCompany);
    setLocationLetters(animatedLocation);
    setEducationLetters(animatedEducation);
  }, []);

  return (
    <div>
      <Typography className="intro">
        I'm{" "}
        <span>
          {nameLetters.map((letter, index) => (
            <React.Fragment key={index}>{letter}</React.Fragment>
          ))}
        </span>{" "}
        , a dedicated React.js developer passionate about crafting innovative
        web applications. With a strong focus on clean, efficient code, I thrive
        on transforming ideas into dynamic, user-friendly interfaces that leave
        a lasting impact.
      </Typography>
      <div className="center">
        <Avatar variant="rounded" className="avatar">
          <WorkIcon className="icon" />
        </Avatar>
        <Typography className="working">
          Working at{" "}
          <span className="company-container">
            {companyLetters.map((letter, index) => (
              <React.Fragment key={index}>{letter}</React.Fragment>
            ))}
          </span>
        </Typography>
      </div>
      {/* Location */}
      <div className="center">
        <Avatar variant="rounded" className="avatar">
          <LocationOnIcon className="icon" />
        </Avatar>
        <Typography className="working">
          Location{" "}
          <span className="company-container">
            {locationLetters.map((letter, index) => (
              <React.Fragment key={index}>{letter}</React.Fragment>
            ))}
          </span>
        </Typography>
      </div>
      {/* Education */}
      <div className="center">
        <Avatar variant="rounded" className="avatar">
          <SchoolIcon className="icon" />
        </Avatar>
        <Typography className="working">
          Education{" "}
          <span className="company-container">
            {educationLetters.map((letter, index) => (
              <React.Fragment key={index}>{letter}</React.Fragment>
            ))}
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default Introduction;
