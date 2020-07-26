import React, {Component} from 'react';

const Titles = [
  'C++ programming Language',
  'C programming language',
  'projects on JavaScript',
  'Developed a simple longin/logout PHP APP',
  'MySQL and Databases',
  'Learning Datastructure using C/C++ ',
  'Done Projects on Bootstrap',
  'Creating React Applications nowdays'
];

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
    const title = Titles[titleIndex];
    return(
    <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'} >
      <span style= {{color: '#04526e'}}>{title}</span>
    </p>
    )
  }
}
export default Title;