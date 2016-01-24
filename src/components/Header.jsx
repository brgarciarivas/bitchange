import React from 'react'
import Base from './Base'
import Jar from './Jar'
import Movie from './Movie'
import Balance from './Balance'
import DropDown from './DropDown'

export default class Header extends Base {
	constructor(props) {
		super(props)
		this.autoBind('showImage')
	}
	showImage(active, balance, goal) {
		switch(active) {
			case 1:
				return <Movie balance={balance} goal={goal} />
			case 2:
				return <Jar balance={balance} goal={goal} />
		}
	}
	render() {
		var appState = this.props.appState
		var activeGoal = appState.get('activeGoal')
		var balance = appState.get('balance').balance
		var header = appState.get('header')

		return (
			<header className='flex-column'>
				<h3>{header}</h3>
				{this.showImage(activeGoal.id, balance, activeGoal.goal)}
				<Balance appState={appState} />
				<DropDown appState={appState} />
			</header>
		)
	}
}

Header.contextTypes = {
	push: React.PropTypes.func
}