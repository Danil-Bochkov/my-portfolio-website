import React, {useEffect, useState} from 'react';
import Style from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Navigation from './Navigation/Navigation';

import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import About from './About/About';
import Home from './Home/Home';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      // eslint-disable-next-line
      let detectedDarkMode = eval(localStorage.getItem('darkMode')); 

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

    return (
          <Box className={darkMode ? Style.dark : Style.light}>
          <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
             <Grid item>
                <Navigation darkMode={darkMode} handleClick={handleToggleDarkMode}/>
             </Grid>
             <Grid item flexGrow={1}>
                <Routes>
                   <Route index path={'/'} element={<Home/>} end/>
                   <Route exact path={'/about'} element={<About/>}/>
                   <Route exact path={'/projects/*'} element={<ProjectsPage/>}/>
                </Routes>
             </Grid>
          </Grid>
         </Box>
  );
};