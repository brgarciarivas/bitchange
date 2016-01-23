import React from 'react'
import Base from './Base'
import $ from 'jquery'

export default class Jar extends Base {
	constructor(props) {
		super(props)
		// this.autoBind()
		this.state = {
			height: 20
		}
	}
	componentDidMount() {
		// animation stuff 
	}
	render() {
		return (
			<div className='jar flex-column'>
				<div className='glass center'>
					<div id='change' style={{ height: this.state.height }}/>
				</div>
			</div>
		)
	}
}