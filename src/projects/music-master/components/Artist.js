import React from 'react';

const Artist = ({ artist }) =>{
  
if(!artist) return null;

  const {name, followers, genres, images} = artist;

  const color = ["#029FD4 ", '#66bb6a', '#f48fb1', '#795548', '#ffb74d']
  const follower = {
    color: color[Math.floor(Math.random() * color.length)],
    width: 'auto',
    borderRadius: 15,
    padding: 5,
  }
  const genre = {
    color: color[Math.floor(Math.random() * color.length)],
    marginTop: 20,
  }
  return(
    <div>
      <h3 style = {genre}>{name}</h3>
      <p style={follower}>{followers.total} followers</p>
      <p style={genre}>{genres.join(' | ')}</p>
      <img  src = {images[0].url} 
      alt = 'artist-profile'
      className = 'artist-profile'
      />
    </div>
  )
}

export default Artist;