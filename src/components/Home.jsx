import React from 'react'
import Base from './Base'
import AppBar from 'material-ui/lib/app-bar'

import Transactions from './Transactions'

export default class Home extends Base {
	constructor(props) {
		super(props)
		this.autoBind('test')
	}
	test() {
		let lol = this.props.appState.get('test')
		lol = lol + 1
		this.context.push({
			type: 'SHALLOW_MERGE', 
			data: {
				test: lol
			}
		})
	}
	render() {
		return (
			<div id='home'>
				<AppBar title='bitchange' />
				<p styleName='test' onClick={this.test}>{this.props.appState.get('test')}</p>
				<Transactions appState={this.props.appState} />
			</div>
		)
	}
}

Home.contextTypes = {
	push: React.PropTypes.func
}