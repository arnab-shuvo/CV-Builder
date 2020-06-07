import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './templates/dashboard';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Dashboard} />} />
			</Switch>
		</Router>
	);
}

export default App;
