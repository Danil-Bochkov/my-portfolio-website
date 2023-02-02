import IconLink from "./IconLink";
import { Box } from "@mui/material";

function ProjectCard({ image, live, source, title, description, category }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={"20px"}
      gap={"30px"}
    >
      <img src={image} alt={category} loading={"lazy"} />
      <Box
        component={"div"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"300px"}
      >
        <Box>
          <h1
            style={{
              textAlign: "center",
              fontSize: "2rem",
              paddingBottom: "1rem",
              xs: { fontSize: "1.5rem" },
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "1rem",
              maxWidth: "500px",
              opacity: ".7",
              textAlign: "center",
              display: "block",
              margin: "0 auto",
            }}
          >
            {description}
          </p>
        </Box>
        <Box
          className={"portfolio"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.8rem"}
          alignItems={"center"}
          fontSize={"1.5rem"}
        >
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={live} title={"Live Page"} icon={"fa fa-safari"} />
          </Box>
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={source} title={"Repository"} icon={"fa fa-code"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
