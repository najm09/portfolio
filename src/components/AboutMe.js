import React from 'react'
import About from "../data/about"
import Title from './Title'
import SocialProfiles from './SocialProfiles'
import Skills from './Skills'

const Details = (props) => {
  return (
    <div className='About-me'>
      <h1 color="white">{props.about.Name}</h1>
      <Title />
      <p  color="white">{props.about.Summary}</p>
      <Skills/>
      <SocialProfiles/>
    </div>
  )
}

const AboutMe = () => {
  return (
    <div>
      {
        About.map(aboutMe => {
          return (
            <Details key={aboutMe.id} about={aboutMe} />
          )
        })
      }
    </div>
  )
}

export default AboutMe