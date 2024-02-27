import "../../assets/Css/AboutPage/circleIntersecton.css";
import TypingBro from "../../assets/img/AboutPage/Typing-bro.svg";
import Programming from "../../assets/img/AboutPage/Programming-amico.svg";
import ReactLogo from "../../assets/img/AboutPage/reactjs-icon.svg";
import { Grid, Typography } from "@mui/material";
const CircleIntersection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <div className="circle-container">
          <div className="circle circle1">
            <img src={ReactLogo} alt="Image 1" />
          </div>
          <div className="circle circle2">
            <div className="image-div">
              <img src={Programming} alt="Image 2" />
            </div>
          </div>
          <div className="circle circle3 intersection">
            <img src={TypingBro} alt="Image 3" />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Typography style={{ color: "white" }}>Grid 2</Typography>
      </Grid>
    </Grid>
  );
};

export default CircleIntersection;
