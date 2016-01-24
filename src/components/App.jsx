import React from 'react'
import Immutable from 'immutable'
import GlobalEventHandler from '../scripts/globalEventHandler'
import api from '../scripts/api'

// tap event fix
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// theme setup
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import DankMemes from '../constants/dankmemes'
import Base from './Base'

var testDate = new Date()
var initialAppState = Immutable.Map({
	header: 'I\'m saving for...',
	goals: {
		1: {
			id: 1,
			type: 'A movie ticket',
			query: 'movie',
			goal: 0.032
		},
		2: {
			id: 2,
			type: 'A cup of coffee',
			query: 'coffee',
			goal: 0.011
		}
	},
	activeGoal: {
		id: 1,
		type: 'A movie ticket',
		query: 'movie',
		goal: 0.032
	},
	subHeader: '',
	vendors: [
	],
	qrCode: 'nope',
	balance: {
		balance: 0,
		native_balance: 0
	},
	goal: 25,
	open: false,
	notify: false,
	notification: 'Payment processing',
	afford: false
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
		this.autoBind('initialize', 'getBalance', 'getAddress')
		this.state = {
			appState: initialAppState
		}
	}
	componentWillMount() {
		this.initialize()
		this.getBalance()
		this.getAddress()
	}
	initialize() {
		initApp.floodGate.subscribe(newState => this.setState({ appState: newState }))
	}
	getAddress() {
		api.get('http://localhost:3000/getAddress')
			.then(res => {
				push({
					qrCode: res.address
				})
			})
	}
	getBalance() {
		api.get('http://localhost:3000/getBalance')
			.then(res => {
				console.log('new balance', res.balance)
				push({
					balance: res
				})
			})
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
