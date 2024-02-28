import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import "../assets/Css/about.css";
import Web from "../assets/img/web.svg";
import TypingBro from "../assets/img/AboutPage/Typing-bro.svg";
import Programming from "../assets/img/AboutPage/Programming-amico.svg";
import ReactLogo from "../assets/img/AboutPage/reactjs-icon.svg";
import { Grid, Typography } from "@mui/material";
import Person from '../assets/img/person.png'
import Boy from '../assets/img/boy.webp'
import Laptop from '../assets/img/laptop.webp'
const About = () => {
  

  return (
    <Card className="card-container">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="grids-container"
        >
          <div className="about-circle-container">
            <div className="circles circles1">
              <img src={Boy} alt="Image 1" />
            </div>
            <div className="circles circles2">
              <div className="images-div">
               
              </div>
            </div>
            <div className="circles circles3 intersections">
              
            </div>
          </div>
        </Grid>
       
      </Grid>
    </Card>
  );
};

export default About;
