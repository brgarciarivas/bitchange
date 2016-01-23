import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'

import App from './components/App'

let routes = (
	<Route path='/' component={App}>

	</Route>
)

let mountPoint = document.getElementById('mount-point')

ReactDOM.render(
	<Router>
		{routes}
	</Router>
, mountPoint)