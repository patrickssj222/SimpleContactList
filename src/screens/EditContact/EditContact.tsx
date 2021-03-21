import React from "react";
import {View} from "react-native";
import {styles} from "./EditContactStyle";
import {Header} from "../../component";
import {useSelector} from "react-redux";
import {ReduxState} from "../../store";
import {useIsFocused} from "@react-navigation/native";
import {GlobalStyle} from "../../globalstyle";

interface Props {
    id: string
}
export const EditContact = (props: Props) => {
    const {id} = props
    const contact = useSelector((state:ReduxState)=>state.contactList[id])
    const isFocused = useIsFocused()
    return <View style={styles.container}>
        <Header title={contact.firstName+" "+contact.lastName} color={GlobalStyle.color.primaryColor} isFocused={isFocused}/>
    </View>
}
