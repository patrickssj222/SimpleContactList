import {StyleSheet} from "react-native";
import { GlobalStyle } from '../../globalstyle'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: GlobalStyle.color.primaryColor
    },
    inputWrapper:{
        padding:30
    },
    inputItemWrapper:{

    },
    inputItem:{
        marginVertical: 20,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.5)",
        padding: 15,
        borderRadius:5
    },
    footer:{
        padding: 30
    }
})
