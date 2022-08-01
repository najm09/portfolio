import React from 'react'
import About from "../data/about"
import Title from './Title'
import SocialProfiles from './SocialProfiles'
import Skills from "./Skills" 
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Details = (props) => {
  return (
    <div className='About-me'>
      <Typography variant='h3' color="white">{props.about.Name}</Typography>
      <Title />
      <Typography variant='h5' color="white">{props.about.Details}</Typography>
      <Typography variant='h5' color="white">{props.about.Skills}</Typography>
      <SocialProfiles />
      <br />
      <TableContainer>
        <TableHead>
          <Table>
            <TableRow>
              <TableCell>
                <Typography variant='h3' color="white">Education</Typography>
                <Typography variant='h6' color="white">{props.about.Institute}</Typography>
                <Typography variant='h6' color="white">{props.about.Faculty}</Typography>
                <Typography variant='h6' color="white">{props.about.Department}</Typography>
                <Typography variant='h6' color="white">Batch : {props.about.Batch}</Typography>
              </TableCell>
              <TableCell>
                <TableRow>
                  <TableCell><Typography variant='h2' color = "white">Skills</Typography></TableCell>
                  <TableCell><Skills/></TableCell>
                </TableRow>
              </TableCell>
            </TableRow>
            <TableRow>
            </TableRow>
          </Table>
        </TableHead>
      </TableContainer>
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