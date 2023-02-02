import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { data } from "../../Data/data";

import Style from "./Projects.module.scss";
import Loader from "../Loader/Loader";
import ProjectsList from "./ProjectsList";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filteredByTag =
      activeBtn === "all"
        ? data.portfolio
        : data.portfolio.filter((project) =>
            project.category.includes(activeBtn)
          );
    setProjectsByCategory(filteredByTag);
    setTimeout(() => setIsLoading(false), 2500);
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
        gap={"2rem"}
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
        <Box
          component={"div"}
          display={"inline-flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"1rem"}
          marginY={"20px"}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <ProjectsList projects={projectsByCategory} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
