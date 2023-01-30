import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import PetProjects from "../../components/Projects/PetProjects/PetProjects";
import TeamProjects from "../../components/Projects/TeamProjects/TeamProjects";
import CommercialProjects from "../../components/Projects/CommercialProjects/CommercialProjects";
import { motion } from "framer-motion";
import { Box } from "@mui/system";

const btns = [
  {
    name: "All",
    to: "/",
  },
  {
    name: "Pet",
    to: "/about",
    active: "about",
  },
  {
    name: "Team",
    to: "/projects",
    active: "projects",
  },
  {
    name: "Commercial",
    to: "/projects",
    active: "projects",
  },
];

function Projects() {
  return (
    <Box
      component={motion.div}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Box
        component={"ul"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
      >
        <Box component={"li"}>
          <Link to="./">All Projects</Link>
        </Box>
        <Box component={"li"}>
          <Link to="./pet">Pet-projects</Link>
        </Box>
        <Box component={"li"}>
          <Link to="./team">Team Projects</Link>
        </Box>
        <Box component={"li"}>
          <Link to="./commercial">Commercial Projects</Link>
        </Box>
      </Box>
      <div>
        <Routes>
          <Route path="./" component={<div>All Projects</div>} />
          <Route path="./pet" component={<PetProjects />} />
          <Route path="./team" component={<TeamProjects />} />
          <Route path="./commercial" component={<CommercialProjects />} />
        </Routes>
      </div>
    </Box>
  );
}

export default Projects;
