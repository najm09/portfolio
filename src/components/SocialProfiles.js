import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {

  const { link, image } = props.socialProfile;
  return (
    <span>
      <a href={link} target="blank">
      <img src={image} alt='my-profile' className='icons-img'/>
      </a>
    </span>
  )
}

const SocialProfiles = () => (
  <div className="icons">
      {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
          <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
        ))
      }
  </div>
)


export default SocialProfiles;