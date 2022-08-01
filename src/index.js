import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Switch, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';

ReactDOM.render(

	<Router history = {createBrowserHistory()}>
		<Switch>
			<Route exact path = '/'><App/></Route>
		</Switch>
	</Router>,

	document.getElementById('root')
	
);