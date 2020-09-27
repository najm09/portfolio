import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import {Router, Switch, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import MusicMaster from './projects/music-master';
import TodoTracker from './projects/Todo_App';

import './index.css';

ReactDOM.render(

	<Router history = {createBrowserHistory()}>
		<Switch>
			<Route exact path = '/'  render = { () => <Header><App/></Header> }/>
			<Route path = '/jokes' render = { () =>  <Header><Jokes/></Header> } />
			<Route path = '/music-master' render = { () =>  <Header><MusicMaster/></Header> } />
			<Route path = '/Todo_App' render = { () =>  <Header><TodoTracker/></Header> } />
		</Switch>
	</Router>,

	document.getElementById('root')
	
);