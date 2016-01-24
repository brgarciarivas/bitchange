import React from 'react'
import Base from './Base'
import Divider from 'material-ui/lib/divider'
import FontIcon from 'material-ui/lib/font-icon'
import AppBar from 'material-ui/lib/app-bar'

import Transactions from './Transactions'
import NewTransaction from './NewTransaction'
import Balance from './Balance'
import Jar from './Jar'
import NavMenu from './NavMenu'

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.autoBind('updateBalance', 'toggleMenu')
	}
	updateBalance() {
		var balance = this.props.appState.get('balance')
		var goal = this.props.appState.get('goal')
		var lol = balance + 1
		console.log(`balance | old: ${balance} new: ${lol}`)

		if(balance == goal) {
			alert('Congrats! You reached your goal')
		} else {
			this.context.push({
				balance: lol
			})
		}
	}
	toggleMenu() {
		this.context.push({
			menuOpen: !this.props.menuOpen
		})
	}
	render() {
		var appState = this.props.appState
		// var balance = appState.get('balance')
		var balance = this.context.appState.get('balance')
		var goal = appState.get('goal')
		var menuOpen = appState.get('menuOpen')
		var open = appState.get('open')

		return (
			<div id='home' className='flex-column'>
				<span onClick={this.updateBalance}>{balance}</span>
				<AppBar onTouchTap={this.toggleMenu} />
				<NavMenu menuOpen={menuOpen} />
				<NewTransaction open={open} />
				<Jar balance={balance} goal={goal} />
				<Balance balance={balance} goal={goal} />
				<Divider />
				<Transactions appState={this.props.appState} />
			</div>
		)
	}
}

Home.contextTypes = {
	push: React.PropTypes.func,
	appState: React.PropTypes.object
}