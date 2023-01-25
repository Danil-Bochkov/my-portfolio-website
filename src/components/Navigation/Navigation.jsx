import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import { Link } from './Navigation.styled'

function Navigation() {
  return (
    <div>
        <Link to='/'>About Me</Link>
        <Link to='/my-projects'>My Projects</Link>
        <Link to='/skills'>Skills</Link>
        <div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
    </div>
  )
}

export default Navigation