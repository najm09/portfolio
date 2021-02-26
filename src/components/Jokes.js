import React,  {Component} from 'react';
// import './jokes.css'

const Joke = ({joke}) =>{

  const {setup, punchline} = joke;

  return (
    <div className = "alert alert-primary" role = "alert">
      <h3 className = "p-2 bg-light ">{setup}{punchline}</h3>
    </div>
    )
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
          <h3 className="text-secondary">Highlighted jokes@appspot</h3>
          <Joke joke = {this.state.joke}/>
          <button onClick = {this.fetchJokes} className = "btn btn-link">More Jokes</button>
          {this.state.jokes.map(joke =>(<Joke key = {joke.id} joke = {joke} />))}
        </div>
        <span className = "text-muted">Developed by Fakhra Najm@2020</span>
      </div>
    ) 
  }
}

export default Jokes;