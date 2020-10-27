import React from 'react'
import SKILLS from './../data/Skills'

const Skill = props => {
  const { name,image } = props.skill;
  const color = ["#029FD4 ",'#DAA520','#66bb6a','#f48fb1','#795548','#ffb74d']
  
  const style = {
    display: 'inline-block',
    margin: 12,
    borderRadius: 5
  }
  const grid = {
    backgroundColor: color[Math.floor(Math.random() * color.length)],
    padding: 10,
    borderRadius: 10,
  }

  return (
    <div style={style}>
      <div>
        <img src = {image}  alt = 'skill' style = {{height:30 ,width:30, marginTop: 30,margin:10}} />
      </div>
    </div>
  )
}

const Skills = () => (
  <div>
    {
      SKILLS.map(SKILL => (
        <Skill key={SKILL.id} skill={SKILL}></Skill>
      ))
    }
  </div>
)

export default Skills