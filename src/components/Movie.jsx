import React from 'react'
import Base from './Base'
import FontIcon from 'material-ui/lib/font-icon'

var icon = {
	margin: 'auto',
	fontSize: '220px',
	zIndex: '2'
}

export default class Movie extends Base {
	constructor(props) {
		super(props)
	}
	render() {
		var {balance, goal} = this.props
		var height = ((balance/goal)*100) - 35
		height = parseInt(height)

		var progress = {
			height: height+'%',
		}
		return (
			<div id='movie' className='flex-column'>
				<FontIcon style={icon} className='material-icons'>
					local_activity
				</FontIcon>
				<div className='progress' style={progress}/>
			</div>
		)
	}
}