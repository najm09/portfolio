import React, { Component } from "react"
import AboutMe from './AboutMe'
import logo from '../../assets/header-background.jpg'
class App extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <img src={logo} alt='alt' width="100%" height="100%" />
        </div>
        <div className="banner-elements">
        <AboutMe />
        </div>
      </div>
    )
  }
}

export default App;