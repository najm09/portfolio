import React, {Component} from "react";
import Project from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png'

class App extends Component {
  state = {displayBio: false};
  // constructor(){
  //   super(); // reference to the root component class
  //   // state is an updatable structure which contains data of the component class.
  //   this.state = {displayBio : false}; 
  //   this.toggleBio = this.toggleBio.bind(this);
  // }
  toggleBio = () => {
    this.setState({displayBio: ! this.state.displayBio});
  }
  render(){
    return (
      <div>
        <img src = {profile} alt = 'profile' className = "profile" />
        <h1>Fakhra Najm</h1>
        <Title/>
        <p>Department of Electrical Engineering</p>
        <p>Faculty of Engineering and Technology</p>
        <p>Jamia Millia Islamia New Delhi </p>
        {
          this.state.displayBio ?( 
          <div>
            <p>BirthPlace: Muzaffarpur Bihar</p>
            <p>Studied at Hazrat Ali Academy</p>
            <p>Studied at Abeda High School(+2) Muzaffarpur</p>
            <p>
              <span> Member of IEEE Jamia Millia Islamia</span>
            </p>
            <button onClick={this.toggleBio} className = "btn btn-default">read Less</button>
          </div> ):
          (
          <div>
            <button onClick={this.toggleBio} className = " btn btn-default">read More</button>
          </div>
          )
        }
        <hr/>
        <Project/>
        <hr/>
        <SocialProfiles/>
      </div>
    )
  }  
}

export default App;