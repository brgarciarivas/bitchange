import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'

import App from './components/App'
import Home from './components/Home'

let routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
	</Route>
)

let mountPoint = document.getElementById('mount-point')

ReactDOM.render(
	<Router>
		{routes}
	</Router>
, mountPoint)