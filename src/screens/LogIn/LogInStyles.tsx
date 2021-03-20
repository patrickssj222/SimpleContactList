import {StyleSheet} from "react-native";
import { GlobalStyle } from '../../globalstyle'

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: GlobalStyle.color.primaryColor
	},
	imageContainer:{
    	alignSelf: "stretch",
		alignItems: "center",
	},
	logo: {
		height:200,
		aspectRatio: 1,
	},
	inputContainer: {
		paddingHorizontal: GlobalStyle.padding.horizontal.containerPaddingHorizontal,
		alignSelf:'stretch',
	},
	textInput: {
		fontSize: GlobalStyle.fontSize.contentLargerFontSize,
		borderBottomWidth: 2,
		borderColor: GlobalStyle.color.lightBorderColor,
		padding: 5,
		marginHorizontal: GlobalStyle.margin.horizontal.elementMarginHorizontal,
		marginVertical: 15,
		fontWeight: "bold"
	},
	textInputError: {
		paddingHorizontal: GlobalStyle.padding.horizontal.elementPaddingHorizontal,
		color: GlobalStyle.color.errorFontColor
	},
	loginActionContainer: {
		paddingHorizontal: GlobalStyle.padding.horizontal.containerPaddingHorizontal,
		alignSelf:'stretch',
		flex:1,
		marginTop: GlobalStyle.margin.vertical.containerMarginVertical,
		justifyContent: "center"
	},
	loginButton: {
	},
	validLoginButton: {
		backgroundColor: GlobalStyle.color.tertiaryColor,
		borderColor: "rgba(0,0,0,0)"
	},
	validLoginButtonText:{
		color: GlobalStyle.color.primaryColor,
	},
	loginButtonText: {
        color: GlobalStyle.color.secondaryColor,
		fontSize: GlobalStyle.fontSize.buttonFontSize
	},
	invalidLogInButton: {
		backgroundColor: GlobalStyle.color.disabled,
		borderColor: "rgba(0,0,0,0)",
	},
	invalidLogInButtonText:{
		color: GlobalStyle.color.primaryColor,
	},
	additionalActionButton: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	additionalActionText: {
		color: GlobalStyle.color.secondaryColor,
		fontSize: GlobalStyle.fontSize.contentFontSize,
	},

})
