import React, { Component } from "react"
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png'

class App extends Component {
  style = {
    marginTop: 15,
    minwidth: '100%',
    height: '100%',
    display: 'inline-block',
    padding: 30,
    borderRadius: 15,
  }

  render() {
    return (
      <div>
        <div style={this.style}>
          <img src={profile} alt='profile' className="profile" />
          <h1>Fakhra Najm</h1>
          <br/>
          <div>
            <Title />
            <p>Department of Electrical Engineering</p>
            <p>Faculty of Engineering and Technology</p>
            <p>Jamia Millia Islamia New Delhi </p>
          </div>
          <table  
          cellpadding="5" 
          cellspacing="5" 
          style={{borderRadius:15,display:'flex',alignItems:"center",flexDirection:"column"}}>
            <tr>
              <SocialProfiles />
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default App;