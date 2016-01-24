import React from 'react'
import Base from './Base'
import Moment from 'moment'
import api from '../scripts/api'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'

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
						header: 'I\'m saving for...',
						subHeader: 'GET MORE BITCOIN'
					})
				} else {
					this.context.push({
						vendors: res.vendors,
						header: 'I saved enough for...',
						subHeader: 'REWARD YOURSELF'
					})
				}

			})
	}
	render() {
		var appState = this.props.appState;
		var vendors = appState.get('vendors')
		var subHeader = appState.get('subHeader')

		return (
			<div>
				<List subheader={subHeader}>
					{
						vendors.map((vendor, index) => {
							// distance = place.distance
							return <ListItem
								key={index}
								style={{ cursor: 'pointer' }}
								leftAvatar={<Avatar src={vendor.image_url} />}
								primaryText={vendor.name}
								secondaryText={vendor.address} />
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
