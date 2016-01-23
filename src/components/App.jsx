import React from 'react'
import Immutable from 'immutable'
import GlobalEventHandler from '../scripts/globalEventHandler'

// theme setup
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import DankMemes from '../constants/dankmemes'
import Base from './Base'

let testDate = new Date()
let initialAppState = Immutable.Map({
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
	balance: 4,
	goal: 10,
	open: false
})

let initApp = GlobalEventHandler(initialAppState)
const push = initApp.push

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