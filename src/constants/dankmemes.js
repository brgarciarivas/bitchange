import Colors from 'material-ui/lib/styles/colors'
import ColorManipulator from 'material-ui/lib/utils/color-manipulator'
import Spacing from 'material-ui/lib/styles/spacing'

const dank = {
	navy: '#313542',
	white: '#f4f4f4',
	lightGray: '#dadfe1',
	gray: '#bdc3c7',
	orange: '#f78e57',
	deepOrange400: '#FF7043',
	green: '#2ecc71',
	yellow: '#f5d76e',
	blue: '#22a7f0',
	blue2: '#2196F3',
	blue3: '#89C4F4',
	red: '#f9575a',
	lightRed: '#f37074'
}

export default {
	spacing: Spacing,
	palette: {
		primary1Color: dank.navy,
		primary2Color: ColorManipulator.darken(dank.red, 0.15),
		primary3Color: ColorManipulator.darken(dank.red, 0.3),
		accent1Color: dank.red,
		accent2Color: dank.lightGray,
		accent3Color: dank.gray,
		textColor: dank.navy,
		alternateTextColor: dank.white,
		canvasColor: dank.white,
		borderColor: dank.navy,
		disabledColor: ColorManipulator.fade(dank.navy, 0.3),
		pickerHeaderColor: dank.red
	}
}