import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";

function AnimatedPages() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path={"/"} element={<Home />} end />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/projects/*"} element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedPages;
