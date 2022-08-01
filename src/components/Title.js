import React, {Component} from 'react';
import About from '../data/about'

const Titles = [
  About[0].Resume
]

class Title extends Component{
  state = {titleIndex: 0, fadeIn: true};

  componentDidMount(){
    setTimeout(()=>this.setState({fadeIn: false}), 2000);
    this.animateTitles();
  }

  componentWillUnmount(){
    clearInterval(this.titleInterval);
  }
  
  animateTitles = () =>{
    this.titleInterval = setInterval(()=>{
      const titleIndex = (this.state.titleIndex + 1) % Titles.length;
      this.setState({titleIndex, fadeIn: true});
      setTimeout(()=>this.setState({fadeIn: false}), 2000); 
    }, 4000);
  }


  render(){
    const {fadeIn, titleIndex} = this.state;
    const link = Titles[titleIndex];
    return(
    <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'} >
      <a href = {link}>Resume</a>
    </p>
    )
  }
}
export default Title;