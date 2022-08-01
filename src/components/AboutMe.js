import React from 'react'
import About from "../data/about"

const Details = (props) => {
  return (
    <div>
      <h3>{props.about.Name}</h3>
      <h3>{props.about.Institute}</h3>
      <h3>{props.about.Faculty}</h3>
      <h3>{props.about.Department}</h3>
      <h3>Batch : {props.about.Batch}</h3>
      <span>
        <p>Phone : {props.about.Phone}</p>
        <p>Address : {props.about.Address}</p>
        <p>About : {props.about.Details}</p>
      </span>
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