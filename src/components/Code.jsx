import React from 'react'
import Base from './Base'

export default class Code extends Base {
	constructor(props) {
		super(props)
		this.autoBind('createCode')
	}
	createCode(data) {
		var baseUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
		return baseUrl
	}
	render() {
		var qrCode = this.props.appState.get('qrCode')
		return (
			<div id='qr'>
				<img src={this.createCode(qrCode)} />
			</div>
		)
	}
}

Code.contextTypes = {
	appState: React.PropTypes.object
}