import React from 'react'
import Base from './Base'
import {Link} from 'react-router'

import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class NavMenu extends Base {
	constructor(props) {
		super(props)
		this.autoBind('hideMenu')
	}
	hideMenu() {
		this.context.push({ menuOpen: false })
	}
	render() {
		return (
			<LeftNav
				open={this.props.menuOpen}>
				<MenuItem onClick={this.hideMenu}>Home</MenuItem>
				<MenuItem onClick={this.hideMenu}>Wallet</MenuItem>
				<MenuItem onClick={this.hideMenu}>Sign Out</MenuItem>
			</LeftNav>
		)
	}
}

NavMenu.contextTypes = {
	push: React.PropTypes.func
}