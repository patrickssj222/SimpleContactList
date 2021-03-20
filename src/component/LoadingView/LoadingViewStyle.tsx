import {StyleSheet} from "react-native";
import {Measurements, GlobalStyle} from "../../globalstyle";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyle.color.primaryColor
    },
    indicator:{
        width: Measurements.screenWidth/3
    },
    titleText:{
        fontSize: GlobalStyle.fontSize.titleFontSize,
        color: GlobalStyle.color.secondaryColor
    },
    contentText:{
        color: GlobalStyle.color.secondaryColor
    }
})
