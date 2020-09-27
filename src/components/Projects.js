import React from 'react';
import PROJECTS from '../data/projects'

const Project = props => {
  
    const{title, image, description, link} = props.project;
    return(
    <div style = {{display: 'inline-block', width: 300, margin : 10}}>
      <h3>{title}</h3>
      <img src = {image} alt = "profile" style = {{width: 200, height:120}}/>
      <p>{description}</p>
      <div style={{marginRight:10, fontSize:10, fontWeight:'bold'}}><a href = {link} target = "blank" >{link}</a></div>
    </div>
    )
  }


  /* inline return :const Project = () => (------)*/


const Projects = () => (                   
    <div>
      <h1>Highlighted Projects</h1>
      <div>
        {
          PROJECTS.map(PROJECT=>(
            <Project key = {PROJECT.id} project = {PROJECT}/>
          ))
        }
      </div>
    </div>
  )
  


export default Projects;