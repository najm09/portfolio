import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {

  const { link, image } = props.socialProfile;
  return (
    <span>
      <a href={link} target="blank">
      <img className="icons" src={image} alt='my-profile' />
      </a>
    </span>
  )
}

const SocialProfiles = () => (
  <div>
    <div>
      {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
          <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
        ))
      }
    </div>
  </div>
)


export default SocialProfiles;