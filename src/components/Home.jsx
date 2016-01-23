import React from 'react'
import Base from './Base'
// import CssModules from 'react-css-modules'
// import styles from '../styles/Home.css'

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
			<p onClick={this.test}>{this.props.appState.get('test')}</p>
		)
	}
}

Home.contextTypes = {
	push: React.PropTypes.func
}

// export default CssModules(Home, styles)
