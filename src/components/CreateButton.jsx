import React from 'react'
import Base from './Base'
import api from '../scripts/api'

import FontIcon from 'material-ui/lib/font-icon'
import FloatingActionButton from 'material-ui/lib/floating-action-button'

export default class CreateButton extends Base {
	constructor(props) {
		super(props)
		this.autoBind('createNewTransaction')
	}
	createNewTransaction() {
		this.context.push({
			open: true
		})
	}
	render() {
		var buttonStyle = {
			position: 'fixed',
			right: '3rem',
			bottom: '3rem'
		}

		return (
			<FloatingActionButton
					style={buttonStyle}
					onTouchTap={this.createNewTransaction} >
					<FontIcon className='material-icons'>add</FontIcon>
			</FloatingActionButton>
		)
	}
}

CreateButton.contextTypes = {
	push: React.PropTypes.func,
	appState: React.PropTypes.object
}