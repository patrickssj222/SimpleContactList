import {GlobalStyle} from "../../globalstyle";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    button:{
        backgroundColor: GlobalStyle.color.primaryColor,
        borderRadius: 5,
        paddingVertical: GlobalStyle.padding.vertical.buttonPaddingVertical,
        paddingHorizontal: GlobalStyle.padding.horizontal.buttonPaddingHorizontal,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: GlobalStyle.color.opaqueBorderColor,
    },
    buttonText:{
        fontSize: GlobalStyle.fontSize.buttonFontSize,
        color: GlobalStyle.color.secondaryColor
    }
})
