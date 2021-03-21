import {StyleSheet} from "react-native";
import { GlobalStyle } from '../../globalstyle'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: GlobalStyle.color.tertiaryColor,
    },
    header:{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: GlobalStyle.padding.horizontal.containerPaddingHorizontal,
        paddingVertical: GlobalStyle.padding.vertical.containerPaddingVertical
    },
    headerText:{
        color: GlobalStyle.color.primaryColor,
        fontWeight: "bold",
        fontSize: GlobalStyle.fontSize.titleFontSize
    },
    actionButtonWrapper:{
        flexDirection: "row"
    },
    actionButton:{
        padding: 20
    },
    listWrapper:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: GlobalStyle.color.primaryColor,
        paddingTop: 20,
        flex:1
    },
    listItemWrapper:{
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listItemText:{
        fontSize: GlobalStyle.fontSize.contentFontSize
    }
})
