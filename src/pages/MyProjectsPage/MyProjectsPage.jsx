import React from 'react'
import { Routes , Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import PetProjects from '../../components/PetProjects/PetProjects'
import TeamProjects from '../../components/TeamProjects/TeamProjects'
import CommercialProjects from '../../components/CommercialProjects/CommercialProjects'

function MyProjectsPage() {
  return (
    <div>
        <NavLink to='./pet'>Pet-projects</NavLink>
        <NavLink to='./team'>Team Projects</NavLink>
        <NavLink to='./commercial'>Commercial Projects</NavLink>
        <div>
            <Routes>
                <Route path="./pet" component={<PetProjects />} />
                <Route path="./team" component={<TeamProjects />} />  
                <Route path="./commercial" component={<CommercialProjects />} />
            </Routes>  
        </div>
    </div>
  )
}

export default MyProjectsPage