import { Routes , Route } from 'react-router'
import { Link } from 'react-router-dom'
import PetProjects from '../../components/Projects/PetProjects/PetProjects'
import TeamProjects from '../../components/Projects/TeamProjects/TeamProjects'
import CommercialProjects from '../../components/Projects/CommercialProjects/CommercialProjects'

function ProjectsPage() {
  return (
    <div>
        <Link to='./pet'>Pet-projects</Link>
        <Link to='./team'>Team Projects</Link>
        <Link to='./commercial'>Commercial Projects</Link>
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

export default ProjectsPage