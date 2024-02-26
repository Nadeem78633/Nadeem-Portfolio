import "../assets/Css/project.css";
import { Typography, Grid, Card, CardMedia } from "@mui/material";

const Projects = () => {
  const projects = [
    { id: 1, project: "React Js.", img: "Not now" },
    { id: 2, project: "Redux ", img: "Not now" },
    { id: 3, project: "Javascript", img: "Not now" },
    { id: 4, project: "Javascript", img: "Not now" },
  ];
  return (
    <div className="container">
      <Typography className="project">Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card className="project-card" sx={{ minHeight: 345 }}>
              <CardMedia
               
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt={project.img}
              />
              <div className="project-data">
                <Typography className="data-typography">
                  {project.project}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
