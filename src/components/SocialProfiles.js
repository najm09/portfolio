import React, {Component} from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {

  const {link, image} = props.socialProfile;
  return(
    <span>
      <a href = {link}><img src = {image}  alt = 'my-profile' style = {{height:30 ,width:30, margin : 10}} /></a>
    </span>
  )
}

const SocialProfiles = () =>(
  <div>
    <h1>Connect with me!</h1>
    <div>
    {
    SOCIAL_PROFILES.map( SOCIAL_PROFILE => (
      <SocialProfile key = {SOCIAL_PROFILE.id} socialProfile = {SOCIAL_PROFILE}/>
    ))
    }
    </div>
  </div>
)


export default SocialProfiles;