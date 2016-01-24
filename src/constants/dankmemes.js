import Colors from 'material-ui/lib/styles/colors'
import ColorManipulator from 'material-ui/lib/utils/color-manipulator'
import Spacing from 'material-ui/lib/styles/spacing'

const dank = {
	navy: '#313542',
	white: '#f4f4f4',
	lightGray: '#dadfe1',
	gray: '#bdc3c7',
	orange: '#f78e57',
	green: '#2ecc71',
	yellow: '#f5d76e',
	blue: '#22a7f0',
	red: '#f9575a'
}

export default {
	spacing: Spacing,
	palette: {
		primary1Color: dank.blue,
		primary2Color: ColorManipulator.darken(dank.blue, 0.2),
		primary3Color: dank.navy,
		accent1Color: dank.red,
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

// palette: {
// 	primary1Color: Colors.cyan500,
// 	primary2Color: Colors.cyan700,
// 	primary3Color: Colors.lightBlack,
// 	accent1Color: Colors.pinkA200,
// 	accent2Color: Colors.grey100,
// 	accent3Color: Colors.grey500,
// 	textColor: Colors.darkBlack,
// 	alternateTextColor: Colors.white,
// 	canvasColor: Colors.white,
// 	borderColor: Colors.grey300,
// 	disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
// 	pickerHeaderColor: Colors.cyan500
// }