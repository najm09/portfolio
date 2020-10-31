import React, { Component } from "react";
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search'
import './App.css';


const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
const color = ["#029FD4 ", '#66bb6a', '#f48fb1', '#795548', '#ffb74d']

class App extends Component {
  state = { artist: null, tracks: [] };
  componentDidMount(){
    this.searchArtist('pentatonix');
  }
  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
          .then(response => response.json())
          .then(json => this.setState({ tracks: json.tracks }))
          .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  style = {
    color:color[Math.floor(Math.random()*color.length)],
    marginBottom: 20,
  }
  render() {
    return (
      <div style={{marginTop:30}}>
        <h1 style={this.style}>Music Master</h1>
        <Search searchArtist = {this.searchArtist}/>
        <Artist artist = {this.state.artist}/>
        <Tracks tracks = {this.state.tracks}/>
      </div>
    )
  }
}
export default App;