import React from 'react'
import Base from './Base'
import Moment from 'moment'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'

class Transactions extends Base {
	constructor(props) {
		super(props)
		// this.autoBind()
	}
	render() {
		let transactions = this.props.appState.get('transactions')
		return (
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
		)
	}
}

export default Transactions