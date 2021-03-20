import {StyleSheet} from "react-native";
import { GlobalStyle } from '../../globalstyle'

export const styles = StyleSheet.create({
    contentContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: GlobalStyle.padding.vertical.elementPaddingVertical*0.5,
    },
    headerLeft:{
        flex:1,
        paddingLeft: 15,
        alignItems: "flex-start"
    },
    headerCenter:{
        flex:2,
        alignItems: "center",
    },
    titleText:{
        fontSize: GlobalStyle.fontSize.contentLargerFontSize
    },
    headerRight:{
        flex:1,
        alignItems: "flex-end",
        paddingRight: 15
    }
})
