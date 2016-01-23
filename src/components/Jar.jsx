import React from 'react'
import Base from './Base'
import CssModules from 'react-css-modules'
import styles from '../styles/Jar.css'

class Jar extends Base {
	constructor(props) {
		super(props)
		// this.autoBind()
	}
	render() {
		return (
			<div />
		)
	}
}

export default CssModules(Jar, styles)
