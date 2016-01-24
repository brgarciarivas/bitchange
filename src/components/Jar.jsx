import React from 'react'
import Base from './Base'

export default class Jar extends Base {
	constructor(props) {
		super(props)
	}
	render() {
		var {balance, goal} = this.props
		var height = (balance/goal)*100
		height = parseInt(height)

		var progress = {
			height: height+'%'
		}
		
		return (
			<div id='jar' className='flex-column'>
				<div className='glass center'>
					<div className='progress' style={progress}/>
					<div className='handle' />
				</div>
			</div>
		)
	}
}