import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { data } from "../../Data/data";

import ProjectCard from "./ProjectCard";

import Style from "./Projects.module.scss";

const btns = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Pet",
    value: "pet",
  },
  {
    name: "Team",
    value: "team",
  },
  {
    name: "Commercial",
    value: "commercial",
  },
];

function Projects() {
  const [activeBtn, setActiveBtn] = useState("all");
  const [projectsByCategory, setProjectsByCategory] = useState(data.portfolio);

  useEffect(() => {
    const filteredByTag =
      activeBtn === "all"
        ? data.portfolio
        : data.portfolio.filter((project) =>
            project.category.includes(activeBtn)
          );
    setProjectsByCategory(filteredByTag);
  }, [activeBtn]);

  return (
    <Box
      component={motion.div}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Box
        component={"div"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
      >
        {btns.map((btn, i) => (
          <Box component={"div"} key={i} className={Style.RadioBtns}>
            <input
              id={i}
              type={"radio"}
              value={btn.value}
              checked={activeBtn === btn.value}
              onChange={(event) => {
                setActiveBtn(event.target.value);
              }}
            />
            <label htmlFor={i}>{btn.name}</label>
          </Box>
        ))}
      </Box>
      <Box>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          marginTop={"40px"}
        >
          {projectsByCategory.map((project, i) => (
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
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
