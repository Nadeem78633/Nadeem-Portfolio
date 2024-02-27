import "../assets/Css/home.css";
import { About, Introduction, Projects, Skills,SocialMedia,CopyRight } from "../Components";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <About />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <Introduction />
        </Grid>
      </Grid>
      <Skills />
      <Projects />
      <SocialMedia />
      <CopyRight/>
    </div>
  );
};

export default Home;
