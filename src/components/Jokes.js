import React,  {Component} from 'react';

const Joke = ({joke}) =>{
  const {setup, punchline} = joke;
  return <p>{setup}<em>{punchline}</em></p>
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
  }

  render(){ 
    return(
      <div>
        <div>
          <h1>Highlighted Joke</h1>
          <Joke joke = {this.state.joke}/>
          <h3>Want more jokes</h3>
          <button onClick = {this.fetchJokes}>clickme</button>
          {this.state.jokes.map(joke =>(<Joke key = {joke.id} joke = {joke}/>))}
        </div>
      </div>
    ) 
  }
}

export default Jokes;