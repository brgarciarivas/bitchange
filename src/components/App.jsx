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
	render() {
		var test = this.state.appState.get('test')
		return (
			<div>
				{
					React.cloneElement(this.props.children, {
						appState: this.state.appState
					})
				}
			</div>
		)
	}
}

App.childContextTypes = {
	push: React.PropTypes.func
}