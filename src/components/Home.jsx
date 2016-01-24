import React from 'react'
import Base from './Base'
import api from '../scripts/api'
import Divider from 'material-ui/lib/divider'

import CreateButton from './CreateButton'
import Header from './Header'
import Places from './Places'
import NewTransaction from './NewTransaction'
import Snackbar from 'material-ui/lib/snackbar'

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.autoBind('updateBalance', 'dismiss')
	}
	updateBalance() {
		var balance = this.props.appState.get('balance')
		var goal = this.props.appState.get('goal')
		var lol = balance + 1
		console.log(`balance | old: ${balance} new: ${lol}`)

		if(balance == goal) {
			alert('Congrats! You reached your goal')
		} else {
			this.context.push({
				balance: lol
			})
		}
	}
	dismiss() {
		this.context.push({
			notify: false
		})
	}
	render() {
		var appState = this.props.appState
		var open = appState.get('open')
		var notify = appState.get('notify')
		var notification = appState.get('notification')

		return (
			<div id='home' className='flex-column'>
				<NewTransaction open={open} appState={appState} />

				<Header appState={appState} />
				<Divider appState={appState} />
				<Places appState={appState} />
				<CreateButton appState={appState} />
				<Snackbar 
					open={notify}
					onRequestClose={this.dismiss}
					message={notification}
					autoHideDuration={1000} />
			</div>
		)
	}
}

Home.contextTypes = {
	push: React.PropTypes.func
}