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
			id: 1,
			date: testDate,
			amount: .35
		},
		{
			id: 2,
			date: testDate,
			amount: .45
		},
		{
			id: 3,
			date: testDate,
			amount: .55
		},
		{
			id: 4,
			date: testDate,
			amount: .65
		},
	],
	types: [
		{
			id: 1,
			type: 'Food & Drink',
			icon: 'restaurant_menu'
		},
		{
			id: 2,
			type: 'Entertainment',
			icon: 'local_bar'
		},
		{
			id: 3,
			type: 'Travel',
			icon: 'local_taxi'
		},
		{
			id: 4,
			type: 'Technology',
			icon: 'computer'
		}
	],
	// types: {
	// 	1: {
	// 		type: 'Food & Drink',
	// 		icon: 'restaurant_menu'
	// 	},
	// 	2: {
	// 		type: 'Entertainment',
	// 		icon: 'local_bar'
	// 	},
	// 	3: {

	// 		type: 'Travel',
	// 		icon: 'local_taxi'
	// 	},
	// 	4: {
	// 		type: 'Technology',
	// 		icon: 'computer'
	// 	}
	// },
	user: {},
	qrCode: 'QR cant melt steel memes',
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
	}
	initialize() {
		initApp.floodGate.subscribe(newState => this.setState({ appState: newState }))
	}
	getChildContext() {
		return {
			push: push,
			muiTheme: ThemeManager.getMuiTheme(DankMemes),
			appState: this.state.appState
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
	muiTheme: React.PropTypes.object,
	appState: React.PropTypes.object
}