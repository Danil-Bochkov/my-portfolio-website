import IconLink from "./IconLink";
import { Box } from "@mui/material";

function ProjectCard({ image, live, source, title, description, category }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img src={image} alt={category} />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <p style={{ fontSize: "1rem" }}>{description}</p>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Page"} icon={"fa fa-safari"} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Repository"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
