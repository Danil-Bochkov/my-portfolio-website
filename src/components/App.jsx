import { useEffect, useState } from "react";
import Style from "./App.module.scss";
import { Box, Grid } from "@mui/material";

import Navigation from "./Navigation/Navigation";
import AnimatedPages from "./AnimatedPages/AnimatedPages";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    // eslint-disable-next-line
    let detectedDarkMode = eval(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navigation darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <AnimatedPages />
        </Grid>
      </Grid>
    </Box>
  );
};
