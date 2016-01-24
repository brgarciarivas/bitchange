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
		var endpoint = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC'
		api.get(endpoint).then(res => {
			var rate = parseInt(res.data.rates.USD)
			this.setState({
				dollarsPerBitcoin: rate
			})
		})
	}
	render() {
		var {balance, goal} = this.props
		var convertedBalance = Money.floatToAmount(this.convertToUsd(balance))
		var convertedGoal = Money.floatToAmount(this.convertToUsd(goal))
		return (
			<div id='balance' className='flex-column'>
				<h1 style={{marginBottom:0}}>{`${balance} / ${goal} BTC`}</h1>
				<p>{`${convertedBalance} / ${convertedGoal} USD`}</p>
			</div>
		)
	}
}
