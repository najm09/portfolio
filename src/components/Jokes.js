import React,  {Component} from 'react';

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
  }

  render(){ 
    return(
      <div>
        <div>
          <pre className='bg bg-primary'><h1>Highlighted jokes</h1></pre>
          <br/>
          <Joke joke = {this.state.joke}/>
          <h2>Want more jokes  <button onClick = {this.fetchJokes}
          className=' glyphicon glyphicon-search btn btn-info'></button></h2>
          {this.state.jokes.map(joke =>(<Joke key = {joke.id} joke = {joke}/>))}
        </div>
      </div>
    ) 
  }
}

export default Jokes;