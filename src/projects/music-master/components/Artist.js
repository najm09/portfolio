import React from 'react';

const Artist = ({ artist }) =>{
  
if(!artist) return null;

  const {name, followers, genres, images} = artist;

  return(
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(',')}</p>
      <img  src = {images[0].url} 
      alt = 'artist-profile'
      className = 'artist-profile'
      />
    </div>
  )
}

export default Artist;