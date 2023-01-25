// import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

// import { PrivateRoute } from './hook/PrivateRoute';
// import { RestrictedRoute } from './hook/RestrictedRoute';
// import route from 'utils/route';

// import Loader from './Loader/Loader';

import AboutMyselfPage from '../pages/AboutMyselfPage/AboutMyselfPage';
// import MyProjectsPage from '../pages/MyProjectsPage/MyProjectsPage';
// import SkillsPage from '../pages/SkillsPage/SkillsPage';

// const AboutMyself = lazy(() => import('../pages/AboutMyselfPage/AboutMyselfPage'));
const MyProjects = lazy(() => import('../pages/MyProjectsPage/MyProjectsPage'));
const Skills = lazy(() => import('../pages/SkillsPage/SkillsPage'));

export const App = () => {
    return (
    <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<AboutMyselfPage />} end/>
            <Route path='/my-projects/*' element={<MyProjects />} />
            <Route path='/skills' element={<Skills />} />
          </Route>
        </Routes>
    </div>
  );
};