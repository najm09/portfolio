import React, { Component } from "react"
import AboutMe from './AboutMe'
class App extends Component {
  render() {
    return (
      <div >
        <div className="banner">
          <img src="https://rauf.in/static/images/header-background.jpg" alt='alt' width="100%" height="100%" />
        </div>
        <div className="banner-elements">
        <AboutMe />
        </div>
      </div>
    )
  }
}

export default App;