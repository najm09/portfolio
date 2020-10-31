import React, {Component} from 'react';

const Titles = [
  'najm09',
  'fnajm09@gmail.com'
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
    const title = Titles[titleIndex];
    return(
    <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'} >
      <div>{title}</div>
    </p>
    )
  }
}
export default Title;