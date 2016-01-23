import React from 'react'
import Base from './Base'

export default class Jar extends Base {
	constructor(props) {
		super(props)
		// this.autoBind()
	}
	render() {
		return (
			<div id='jar'>
				<div id='change' />
			</div>
		)
	}
}