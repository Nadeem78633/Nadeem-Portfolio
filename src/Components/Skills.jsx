import { Card, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "../assets/Css/skills.css";

const Skills = () => {
  const data = [
    { id: 1, skill: "React Js." },
    { id: 2, skill: "Redux " },
    { id: 3, skill: "Javascript" },
    { id: 4, skill: "Javascript" },
    { id: 5, skill: "Javascript" },
    { id: 6, skill: "Javascript" },
  ];
  return (
    <div>
      <Typography className="skill">Skills .</Typography>
      <Grid container spacing={2} className="container">
        {data.map((skill) => (
          <Grid key={skill.id} item xs={12} sm={4} md={4} lg={2} xl={2}>
            <Card className="skill-card">
              <CircleIcon
                className="circle-icon"
              />
              <div className="skill-data">
                <Typography className="data-typography">
                  {skill.skill}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
