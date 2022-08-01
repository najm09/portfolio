import React from 'react'
import SKILLS from './../data/Skills'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Table, TableCell, TableRow } from '@mui/material';

const Skill = props => {
  const [hover, setHover] = React.useState({})
  const { image } = props.skill;
  return (
    <div className='skill-set'>
      <Table>
        <TableCell>
          <CardMedia
            onMouseEnter={() => { setHover({ [image]: true }) }}
            onMouseLeave={() => { setHover({ [image]: false }) }}
            style={{ width: hover[image] ? 120 : 80, height: hover[image] ? 120 : 80 }}
            component="img"
            alt="Skill"
            image={image}
          />
        </TableCell>
      </Table>
    </div>
  )
}

const Skills = () => (
  <div >
    <Table>
      {SKILLS.map(SKILL => (

        <TableCell>
          <Skill key={SKILL.id} skill={SKILL}></Skill>
        </TableCell>
      ))
      }
    </Table>
  </div>
)

export default Skills