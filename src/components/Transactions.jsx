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
		this.autoBind('createNewTransaction', 'getTransactions')
	}
	createNewTransaction() {
		console.log('new transaction')
		this.context.push({
			open: true
		})
	}
	getTransactions() {
		console.log('fetching transactions...')
	}
	render() {
		var transactions = this.props.appState.get('transactions')
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
								primaryText={trans.location}
								secondaryText={Moment(trans.date).format('h:mm - MMM D YYYY')} />
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
	push: React.PropTypes.func
}

export default Transactions