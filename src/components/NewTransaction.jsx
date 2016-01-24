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
		this.autoBind('handlePayment', 'close')
	}
	close() {
		this.context.push({
			open: !this.props.open
		})
	}
	handlePayment() {
		console.log('ayy lmao dank memes')
	}
	render() {
		var actions = [
			<FlatButton
				label='Cancel'
				onTouchTap={this.close}/>,
			<FlatButton
				label='Request'
				primary={true}
				onTouchTap={this.handlePayment} />
		]

		return (
			<Dialog
				title='Get Change'
				actions={actions}
				open={this.props.open}
				modal={true}
				onRequestClose={this.close} >
				<Code />
				Scan the QR code to receive change in Bitcoin
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