import React from 'react'
import Skills from './Pages/Skills'
import GitHubInfo from './Pages/GithubInfo'
import Profile from './Pages/Profile'

const DashBoard = () => {
  return (
    <div>
    <Profile/>
    <Skills></Skills>
    <GitHubInfo/>
   </div>
  )
}


export default DashBoard