import React from 'react'
import Base from './Base'
import Moment from 'moment'
import api from '../scripts/api'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'

var style = {
	right: '2rem',
	width: 40
}

class Places extends Base {
	constructor(props) {
		super(props)
		this.autoBind('getVendors')
		this.getVendors(this.props.appState.get('activeGoal').query)
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.appState.get('activeGoal') != this.props.appState.get('activeGoal')) {
			this.getVendors(nextProps.appState.get('activeGoal').query)
		}
	}
	getVendors(query) {
		console.log('fetching places...')
		api.get(`http://localhost:3000/getVendors?goal=${query}`)
			.then(res => {
				console.log(res)
				if(res.status == false) {
					this.context.push({
						vendors: res.vendors,
						header: 'I want to buy...',
						subHeader: 'PAYING OUT',
						afford: false
					})
				} else {
					this.context.push({
						vendors: res.vendors,
						header: 'I can afford...',
						subHeader: 'NEAR YOU',
						afford: true
					})
				}
				
			})
	}
	render() {
		var appState = this.props.appState;
		var vendors = appState.get('vendors')
		var subHeader = appState.get('subHeader')
		var afford = appState.get('afford')

		return (
			<div style={{marginBottom: '9rem'}} >
				<List subheader={subHeader}>
					{
						vendors.map((vendor, index) => {
							var icon = afford ? <p style={style}>{vendor.price+' BTC'}</p> : <p style={style}>{vendor.distance+' mi'}</p>

							return <ListItem
								key={index}
								style={{ cursor: 'pointer' }}
								leftAvatar={<Avatar />}
								primaryText={vendor.name}
								secondaryText={vendor.address}
								rightIcon={icon} />
						})
					}
				</List>
				
			</div>
		)
	}
}

Places.contextTypes = {
	push: React.PropTypes.func
}

export default Places
