import React from 'react'
import Base from './Base'

import DropDownMenu from 'material-ui/lib/DropDownMenu'
import MenuItem from 'material-ui/lib/menus/menu-item'

var styles = {
	menu: {
		fontSize: '4rem',
		textAlign: 'center',
		margin: 'auto'
	},
	item: {
		left: 0
	},
	inner: {
		width: '60vw'
	},
}

export default class DropDown extends Base {
	constructor(props) {
		super(props)
		this.autoBind('handleChange')
		this.state = {
			value: 1
		}
	}
	handleChange(e, index, value) {
		value = {value}.value
		console.log(value)
		this.setState({value})
		this.context.push({
			activeGoal: this.context.appState.get('goals')[value]
		})
	}
	render() {
		var appState = this.context.appState
		var movie = appState.get('goals')[1].type
		var coffee = appState.get('goals')[2].type
		

		return (
			<DropDownMenu
				style={styles.menu}
				value={this.state.value}
				onChange={this.handleChange}>
				<MenuItem
					style={styles.item}
					innerDivStyle={styles.inner} 
					value={1} 
					primaryText={movie} />
				<MenuItem
					style={styles.item}
					innerDivStyle={styles.inner} 
					value={2} 
					primaryText={coffee} />
			</DropDownMenu>
		)
	}
}

DropDown.contextTypes = {
	push: React.PropTypes.func,
	appState: React.PropTypes.object
}