import React from 'react'
import Base from './Base'

export default class Code extends Base {
	constructor(props) {
		super(props)
		this.autoBind('createCode')
	}
	createCode() {
		var qrCode = this.context.appState.get('qrCode')
	}
	render() {
		return (
			<div />
		)
	}
}

Code.contextTypes = {
	appState: React.PropTypes.object
}