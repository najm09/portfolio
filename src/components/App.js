import React, { Component } from "react"
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png'

const Background = "https://images.wallpaperscraft.com/image/starry_sky_clouds_sunset_120716_2560x1080.jpg"
class App extends Component {
  style = {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '450px',
    display: 'inline-block',
    padding: 50,
    borderRadius: 25,
  }

  render() {
    return (
      <div >
        <div style={this.style}>
          <img src={profile} alt='profile' className="profile" />
          <h1>Fakhra Najm</h1>
          <br />
          <div>
            <Title />
            <p>Department of Electrical Engineering</p>
            <p>Faculty of Engineering and Technology</p>
            <p>Jamia Millia Islamia New Delhi </p>
          </div>
          <table
            cellpadding="6"
            cellspacing="6"
            style={{ borderRadius: 15, display: 'flex', alignItems: "center", flexDirection: "column",}}>
            <tr>
              <SocialProfiles />
            </tr>
          </table>
          {/* <div>
            <iframe
              width="100%"
              height="1500px"
              src='/music-master'
              allowFullScreen
              frameBorder="0"
              marginBottom="0px">
            </iframe>
          </div> */}
        </div>
      </div>
    )
  }
}

export default App;