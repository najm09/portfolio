import React from 'react'
import SKILLS from './../data/Skills'
import CardMedia from '@mui/material/CardMedia';

const Skill = props => {
  const [hover, setHover] = React.useState({})
  const { image } = props.skill;
  return (
    <div className='skill-set'>
      <CardMedia
        onMouseEnter={() => { setHover({ [image]: true }) }}
        onMouseLeave={() => { setHover({ [image]: false }) }}
        style={{ width: hover[image] ? 120 : 80, height: hover[image] ? 120 : 80, display: "inline-flex" }}
        component="img"
        alt="Skill"
        image={image}
      />
    </div>
  )
}

const Skills = () => (
  <div style={{display: "flex", height: "120px"}}>
      {SKILLS.map(SKILL => (

          <Skill key={SKILL.id} skill={SKILL}></Skill>
      ))
      }
  </div>
)

export default Skills