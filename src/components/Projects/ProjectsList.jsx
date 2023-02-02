import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

function ProjectsList({projects}) {
  return (
    <>
      {projects.map((project, i) => (
      <Grid item xs={12} md={6} key={i}>
          <ProjectCard
            image={project.image}
            category={project.category}
            live={project.live}
            source={project.source}
            title={project.title}
            description={project.description}
          />
      </Grid>
      ))}
    </>
  )
}



export default ProjectsList