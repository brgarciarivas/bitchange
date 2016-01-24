import React from 'react'
import Base from './Base'
import Money from 'money-math'
import api from '../scripts/api'

export default class Balance extends Base {
	constructor(props) {
		super(props)
	}
	render() {
		var appState = this.props.appState
		var goal = appState.get('activeGoal').goal
		var usrBalance = appState.get('balance')
		var {balance, native_balance} = usrBalance

		balance = balance.toString().slice(0, 5)
		native_balance = Money.floatToAmount(native_balance)

		return (
			<div id='balance' className='flex-column'>
				<h3 style={{margin:0}}>{`${balance} BTC`}</h3>
				<p>{`${native_balance} USD`}</p>
			</div>
		)
	}
}

Balance.contextTypes = {
	push: React.PropTypes.func
}