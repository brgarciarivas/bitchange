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
		this.autoBind('getVendors', 'getGooglePlaces')
		this.getVendors()
	}
	getVendors() {
		console.log('fetching places...')
		api.get('http://localhost:3000/getVendors')
			.then(res => {
				console.log(res)
			})
	}
	getGooglePlaces() {
		// get these when goalReached = true
	}
	render() {
		var appState = this.context.appState;
		var places = appState.get('places')
		// TODO compare activeGoal.goal to balance for subheader & places
		return (
			<div>
				<List subheader='PAYING OUT || NEAR YOU'>
					{
						places.map((place, index) => {
							// distance = place.distance
							return <ListItem
								key={index}
								style={{ cursor: 'pointer' }}
								leftAvatar={<Avatar />}
								primaryText={place.name}
								secondaryText={place.address} />
						})
					}
				</List>
				
			</div>
		)
	}
}

Places.contextTypes = {
	push: React.PropTypes.func,
	appState: React.PropTypes.object
}

export default Places
