import React from 'react'
import Base from './Base'
import $ from 'jquery'

export default class Jar extends Base {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		// animation stuff 
	}
	render() {
		var {balance, goal} = this.props
		var height = (balance/goal)*100
		var style = {
			height: height+'%'
		}
		
		return (
			<div className='jar flex-column'>
				<div className='glass center'>
					<div id='change' style={style}/>
				</div>
			</div>
		)
	}
}