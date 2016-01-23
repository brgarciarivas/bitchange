import React from 'react'
import Immutable from 'immutable'
import GlobalEventHandler from '../scripts/globalEventHandler'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Base from './Base'

injectTapEventPlugin()

let initialAppState = Immutable.Map({
	test: 1
})

let initApp = GlobalEventHandler(initialAppState)
const push = initApp.push

export default class App extends Base {
	constructor(props) {
		super(props)
		this.autoBind('initialize', 'test')
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
		let lol = this.state.appState.get('test')
		lol = lol + 1
		push({
			type: 'SHALLOW_MERGE', 
			data: {
				test: lol
			}
		})
	}
	render() {
		var test = this.state.appState.get('test')
		console.log(this.state.appState)
		return (
			<div onClick={this.test}>
				<p>{test}</p>
			</div>
		)
	}
}

App.childContextTypes = {
	push: React.PropTypes.func
}