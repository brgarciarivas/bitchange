import React from 'react'
import Base from './Base'
import Money from 'money-math'
import api from '../scripts/api'

export default class Balance extends Base {
	constructor(props) {
		super(props)
		this.autoBind('getExchangeRates', 'convertToUsd')
		this.state = {
			dollarsPerBitcoin: 1
		}
		this.getExchangeRates()
	}
	convertToUsd(amount) {
		var rate = this.state.dollarsPerBitcoin
		return amount*rate
	}
	getExchangeRates() {
		// var endpoint = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC'
		// api.get(endpoint).then(res => {
		// 	var rate = parseInt(res.data.rates.USD)
		// 	this.setState({
		// 		dollarsPerBitcoin: rate
		// 	})
		// })
	}

	render() {
		var appState = this.props.appState
		var goal = appState.get('activeGoal').goal
		var usrBalance = appState.get('balance')
		var {balance, native_balance} = usrBalance

		balance = balance.toString().slice(0, 5)
		native_balance = Money.floatToAmount(native_balance)

		// var convertedBalance = Money.floatToAmount(this.convertToUsd(balance))
		// var convertedGoal = Money.floatToAmount(this.convertToUsd(goal))

		return (
			<div id='balance' className='flex-column'>
				<h3 style={{margin:0}}>{`${balance} / ${goal} BTC`}</h3>
				{/*<p>{`${native_balance} / ${goal} USD`}</p>*/}
			</div>
		)
	}
}

Balance.contextTypes = {
	push: React.PropTypes.func
}