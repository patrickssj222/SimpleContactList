import {StyleSheet} from "react-native";
import { GlobalStyle } from '../../globalstyle'

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: GlobalStyle.color.primaryColor
	},
	statusBar: {
		backgroundColor: GlobalStyle.color.primaryColor
    },
    header: {
		fontSize: GlobalStyle.fontSize.headerFontSize,
		fontWeight: "bold",
		marginLeft: GlobalStyle.margin.horizontal.elementMarginHorizontal
    },
    imageContainer:{
        alignSelf: "stretch",
        alignItems: "center",
    },
    logo: {
        height:200,
        aspectRatio: 1,
    },
    formContainer:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal: GlobalStyle.padding.horizontal.containerPaddingHorizontal,
    },
    emailAddressText: {
        fontSize: GlobalStyle.fontSize.contentLargerFontSize,
    },
    inputContainer: {
        marginBottom: GlobalStyle.margin.vertical.elementMarginVertical,
    },
    textInputArea: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: GlobalStyle.color.lightBorderColor,
    },
    textInput: {
        fontSize: GlobalStyle.fontSize.contentLargerFontSize,
        borderBottomWidth: 2,
        borderColor: GlobalStyle.color.lightBorderColor,
        padding: 5,
        marginVertical: 15,
        fontWeight: "bold",
        marginHorizontal: GlobalStyle.margin.horizontal.elementMarginHorizontal,
    },
    inputError: {
        color: GlobalStyle.color.errorFontColor
    },
    footer:{
        flex:1,
        justifyContent: "center",
        paddingHorizontal: GlobalStyle.padding.horizontal.containerPaddingHorizontal,
        marginVertical: GlobalStyle.margin.vertical.elementMarginVertical
    },
    signUpButton: {
        alignSelf: "stretch",
        marginTop:10,
        marginBottom:10,
	},
	signUpButtonText: {
        color: GlobalStyle.color.secondaryColor,
		fontSize: GlobalStyle.fontSize.buttonFontSize
    },
    validSignUpButton: {
		backgroundColor: GlobalStyle.color.tertiaryColor,
        borderColor: "rgba(0,0,0,0)",
	},
	validSignUpButtonText:{
        color: GlobalStyle.color.primaryColor,
        backgroundColor: GlobalStyle.color.tertiaryColor,
    },
    invalidSignUpButton: {
		backgroundColor: GlobalStyle.color.disabled,
        borderColor: "rgba(0,0,0,0)",
	},
	invalidSignUpButtonText:{
        color: GlobalStyle.color.primaryColor,
	},
})

export default styles
