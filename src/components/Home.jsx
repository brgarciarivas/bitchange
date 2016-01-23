import React from 'react'
import Base from './Base'
import AppBar from 'material-ui/lib/app-bar'

import Transactions from './Transactions'
import Balance from './Balance'
import Jar from './Jar'

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.autoBind('updateBalance')
	}
	updateBalance() {
		var balance = this.props.appState.get('balance')
		var goal = this.props.appState.get('goal')
		var lol = balance + 2
		console.log(`balance | old: ${balance} new: ${lol}`)

		if(balance == goal) {
			alert('Congrats! You reached your goal')
		} else {
			this.context.push({
				type: 'SHALLOW_MERGE', 
				data: {
					balance: lol
				}
			})
		}
	}
	render() {
		var appState = this.props.appState
		var balance = appState.get('balance')
		var goal = appState.get('goal')
		return (
			<div id='home' className='flex-column'>
				<p onClick={this.updateBalance}>{this.props.appState.get('balance')}</p>
				<Jar balance={balance} goal={goal} />
				<Balance balance={balance} goal={goal} />
				<Transactions appState={this.props.appState} />
			</div>
		)
	}
}

Home.contextTypes = {
	push: React.PropTypes.func
}