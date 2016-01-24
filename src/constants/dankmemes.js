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
	red: '#f9575a',
}

export default {
	spacing: Spacing,
	palette: {
		primary1Color: dank.red,
		primary2Color: ColorManipulator.darken(dank.red, 0.15),
		primary3Color: ColorManipulator.darken(dank.red, 0.3),
		accent1Color: dank.blue2,
		accent2Color: dank.lightGray,
		accent3Color: dank.gray,
		textColor: dank.navy,
		alternateTextColor: dank.white,
		canvasColor: dank.white,
		borderColor: dank.gray,
		disabledColor: ColorManipulator.fade(dank.navy, 0.3),
		pickerHeaderColor: dank.red
	}
}