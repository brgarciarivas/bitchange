import React from 'react'
import Base from './Base'

import api from '../scripts/api'

export default class Balance extends Base {
	constructor(props) {
		super(props)
		this.autoBind('getExchangeRates', 'convert')
		this.getExchangeRates()
		this.state = {
			exchangeRate: 1
		}
	}
	convert(balance, goal) {
		var rate = this.state.exchangeRate
	}
	getExchangeRates() {
		var endpoint = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC'
		api.get(endpoint).then(res => {
			console.log(res)
			var rate = res.data.rates.USD
			console.log(rate)
			this.setState({
				exchangeRate: rate
			})
		})
	}
	render() {
		var {balance, goal} = this.props
		return (
			<div id='balance'>
				<h3>{`${balance} / ${goal} BTC`}</h3>
			</div>
		)
	}
}
