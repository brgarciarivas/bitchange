import React from 'react'
import Immutable from 'immutable'
import GlobalEventHandler from '../scripts/globalEventHandler'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// theme setup
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import DankMemes from '../constants/dankmemes'
import Base from './Base'

var testDate = new Date()
var initialAppState = Immutable.Map({
	test: 1,
	transactions: [
		{
			location: 'Nugbrand',
			date: testDate,
			amount: .35
		},
		{
			location: '7 11',
			date: testDate,
			amount: .45
		},
		{
			location: 'Setmine',
			date: testDate,
			amount: .55
		},
		{
			location: 'Setmine',
			date: testDate,
			amount: .55
		},
		{
			location: 'Setmine',
			date: testDate,
			amount: .55
		}
	],
	user: {},
	balance: 3,
	goal: 25,
	open: false,
	menuOpen: false
})

var initApp = GlobalEventHandler(initialAppState)
const pushFn = initApp.push
const push = (data) => pushFn({
	type: 'SHALLOW_MERGE',
	data: data
})

export default class App extends Base {
	constructor(props) {
		super(props)
		this.autoBind('initialize')
		this.state = {
			appState: initialAppState
		}
	}
	componentWillMount() {
		this.initialize()
		console.log(typeof(this.state.appState))
	}
	initialize() {
		initApp.floodGate.subscribe(newState => this.setState({ appState: newState }))
	}
	getChildContext() {
		return {
			push: push,
			muiTheme: ThemeManager.getMuiTheme(DankMemes)
		}
	}
	render() {
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
	push: React.PropTypes.func,
	muiTheme: React.PropTypes.object
}