import React from 'react';

import PROJECTS from '../data/projects'

const Project = props => {
  const { title, image, description, link } = props.project;
  const color = ["#029FD4 ",'#DAA520','#66bb6a','#f48fb1','#795548','#ffb74d']
  const style = {
    display: 'inline-block',
    margin: 15,
    backgroundColor: color[Math.floor(Math.random() * color.length)],
    padding: 10,
    borderRadius: 10,
  }
  return (
    <div style={style}>
      <div>
        <h3>{title}</h3>
        <a href={link} target="blank">
          <img src={image} alt="profile" style={{ width: 200, height: 200, borderRadius: 7 }} />
        </a>
        <div style={{ textAlign: 'center' }}>{description}</div>
      </div>
    </div>
  )
}

/* inline return :const Project = () => (------)*/

const Projects = () => (
  <div>
    {
      PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))
    }
  </div>
)

export default Projects;