import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Login from './routes/login';










export default () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Login path="/profile/:user" onLogin={this.setUser} />
		</Router>
	</div>
);
