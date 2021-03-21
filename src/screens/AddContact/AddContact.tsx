import React, {useState} from "react";
import {TextInput, View, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import {styles} from "./AddContactStyle";
import {CustomButton, Header} from "../../component";
import {GlobalStyle} from "../../globalstyle";
import {useIsFocused} from "@react-navigation/native"
export const AddContact = () => {
    const isFocused = useIsFocused()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [companyName, setCompanyName] = useState("")

    return <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
            <Header title={"Add Contact"} color={GlobalStyle.color.primaryColor} isFocused={isFocused}/>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputItem} value={firstName} placeholder={"First Name"} onChangeText={setFirstName}/>
                <TextInput style={styles.inputItem} value={lastName} placeholder={"Last Name"} onChangeText={setLastName}/>
                <TextInput style={styles.inputItem} value={companyName} placeholder={"Company Name"} onChangeText={setCompanyName}/>
            </View>
            <View style={styles.footer}>
                <CustomButton
                    text={"Submit"}
                    buttonStyle={{backgroundColor: GlobalStyle.color.tertiaryColor, borderWidth: 0}}
                    textStyle={{color: GlobalStyle.color.primaryColor}}
                    onPress={()=>{}}
                />
            </View>
        </View>
    </TouchableWithoutFeedback>
}
