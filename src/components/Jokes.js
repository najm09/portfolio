import React,  {Component} from 'react';
import './jokes.css'

const Joke = ({joke}) =>{
  const {setup, punchline} = joke;
  return <div className= 'panel panel-info'><h3>{setup}<em>{punchline}</em></h3></div>
}

class Jokes extends Component{
  state = {joke: {}, jokes: []};

  componentDidMount(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(json => this.setState({joke: json}))
    .catch(error => alert(error.message));

  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => response.json())
    .then(json => this.setState({jokes: json}))
    .catch(error => alert(error.message));
    document.getElementById("btn").innerHTML = "Refresh";
  }

  render(){ 
    return(
      <div>
        <div className='box'>
          <h3 className="title">Highlighted jokes@appspot</h3>
          <Joke joke = {this.state.joke}/>
          <button onClick = {this.fetchJokes} className="btn" id="btn">More Jokes</button>
          {this.state.jokes.map(joke =>(<Joke key = {joke.id} joke = {joke} />))}
        </div>
        <span className="dev">Developed by Fakhra Najm@2020</span>
      </div>
    ) 
  }
}

export default Jokes;