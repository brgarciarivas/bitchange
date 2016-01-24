import React from 'react'
import Base from './Base'
import api from '../scripts/api'

import Dialog from 'material-ui/lib/dialog'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'

import Code from './Code'

export default class NewTransaction extends Base {
	constructor(props) {
		super(props)
		this.autoBind('continue', 'cancel')
	}
	componentDidMount() {
		// setInterval() 
	}
	cancel() {
		this.context.push({
			open: !this.props.open
		})
	}
	continue() {
		this.context.push({
			open: !this.props.open,
			notify: true
		})
	}
	render() {
		var actions = [
			<FlatButton
				label='Cancel'
				secondary={true}
				onTouchTap={this.cancel}/>,
			<FlatButton
				label='Continue'
				primary={true}
				onTouchTap={this.continue}/>,
		]

		return (
			<Dialog
				title='Get Change'
				actions={actions}
				open={this.props.open}
				modal={true}
				onRequestClose={this.close} >
				<Code appState={this.props.appState}/>
				Scan to receive change in Bitcoin
			</Dialog>
		)
	}
}

NewTransaction.contextTypes = {
	push: React.PropTypes.func
}

NewTransaction.defaultProps = {
	open: false
}