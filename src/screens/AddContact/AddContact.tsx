import React, {useState} from "react";
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView, Platform
} from "react-native";
import {styles} from "./AddContactStyle";
import {CustomButton, Header} from "../../component";
import {GlobalStyle} from "../../globalstyle";
import {useIsFocused, useNavigation} from "@react-navigation/native"
import {useDispatch} from "react-redux";
import {SAGA_ADD_CONTACT} from "../../saga/contact/actions";
import {AppRoutes} from "../../constants/routes";
export const AddContact = () => {
    const isFocused = useIsFocused()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const submit = () => {
        const contact = {firstName, lastName, companyName}
        const callBack = () => {
            navigation.navigate(AppRoutes.Home)
        }
        dispatch({type: SAGA_ADD_CONTACT, payload:{setLoading,contact,callBack}})
    }
    return <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
            <Header title={"Add Contact"} color={GlobalStyle.color.primaryColor} isFocused={isFocused}/>
            <KeyboardAvoidingView style={styles.inputWrapper} behavior={Platform.OS == "ios" ? "padding" : undefined}>
                <View style={styles.inputItemWrapper}>
                    <Text>First Name</Text>
                    <TextInput style={styles.inputItem} value={firstName} placeholder={"First Name"} onChangeText={setFirstName}/>
                </View>
                <View style={styles.inputItemWrapper}>
                    <Text>Last Name</Text>
                    <TextInput style={styles.inputItem} value={lastName} placeholder={"Last Name"} onChangeText={setLastName}/>
                </View>
                <View style={styles.inputItemWrapper}>
                    <Text>Company Name</Text>
                    <TextInput style={styles.inputItem} value={companyName} placeholder={"Company Name"} onChangeText={setCompanyName}/>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <CustomButton
                    text={"Submit"}
                    buttonStyle={{backgroundColor: GlobalStyle.color.tertiaryColor, borderWidth: 0}}
                    textStyle={{color: GlobalStyle.color.primaryColor}}
                    onPress={submit}
                    showActivityIndicator={loading}
                />
            </View>
        </View>
    </TouchableWithoutFeedback>
}
