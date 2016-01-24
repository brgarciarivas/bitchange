import React from 'react'
import Base from './Base'
import Moment from 'moment'
import api from '../scripts/api'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import FontIcon from 'material-ui/lib/font-icon'

class Transactions extends Base {
	constructor(props) {
		super(props)
		this.autoBind('createNewTransaction', 'getTransactions', 'appendTypes')
	}
	createNewTransaction() {
		console.log('new transaction')
		api.get('http://localhost:3000/getAddress')
			.then(res => console.log(res))
		// this.context.push({
		// 	open: true
		// })
	}
	getTransactions() {
		console.log('fetching transactions...')
	}
	appendTypes(transactions) {

	}
	render() {
		var appState = this.context.appState;
		// var transactions = this.props.appState.get('transactions')
		var transactions = appState.get('transactions')
		var buttonStyle = {
			position: 'fixed',
			right: '3rem',
			bottom: '3rem'
		}

		// I can show
		// amount
		// status ie completed/pending
		// date

		return (
			<div>
				<List subheader='TRANSACTIONS'>
					{
						transactions.map((trans, index) => {
							return <ListItem
								key={index}
								style={{ cursor: 'pointer' }}
								leftAvatar={<Avatar />}
								primaryText={trans.typeId}
								secondaryText={Moment(trans.date).format('MMM D YYYY')} />
						})
					}
				</List>
				<FloatingActionButton
					style={buttonStyle}
					onTouchTap={this.createNewTransaction} >
					<FontIcon className='material-icons'>add</FontIcon>
				</FloatingActionButton>
			</div>
		)
	}
}

Transactions.contextTypes = {
	push: React.PropTypes.func,
	appState: React.PropTypes.object
}

export default Transactions
