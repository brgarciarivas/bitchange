import React from 'react'
import Immutable from 'immutable'
import GlobalEventHandler from '../scripts/globalEventHandler'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Base from './Base'

injectTapEventPlugin()

let initialAppState = Immutable.Map({
	test: 'ayy lmao'
})

let initApp = GlobalEventHandler(initialAppState)
const push = initApp.push

export default class App extends Base {
	constructor(props) {
		super(props)
		this.autoBind('test', 'initialize')
		this.state = {
			appState: initialAppState
		}
	}
	componentWillMount() {
		this.initialize()
	}
	initialize() {
		initApp.floodGate.subscribe(newState => this.setState({ appState: newState }))
	}
	getChildContext() {
		push: push
	}
	test() {
		console.log('ayy lmao')
	}
	render() {
		return (
			<div onClick={() => console.log(new Date())}>
				test shit fuck
			</div>
		)
	}
}

App.childContextTypes = {
	push: React.PropTypes.func
}