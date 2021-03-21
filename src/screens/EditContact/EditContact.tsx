import React, {useEffect, useState} from "react";
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "./EditContactStyle";
import {CustomButton, Header} from "../../component";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../../store";
import {useIsFocused,useNavigation} from "@react-navigation/native";
import {GlobalStyle} from "../../globalstyle";
import {AppRoutes} from "../../constants/routes";
import {SAGA_REMOVE_CONTACT, SAGA_UPDATE_CONTACT} from "../../saga/contact/actions";

interface Props {
    id: string
}
export const EditContact = (props: Props) => {
    const {id} = props
    const contact = useSelector((state:ReduxState)=>state.contactList[id])
    const isFocused = useIsFocused()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [editLoading, setEditLoading] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    useEffect(()=>{
        setFirstName(contact?.firstName)
        setLastName(contact?.lastName)
        setCompanyName(contact?.companyName)
    },[])
    if(!contact){
        return null
    }
    const callBack = () => {
        navigation.navigate(AppRoutes.Home)
    }
    const editContact = () => {
        const contact = {id,firstName, lastName, companyName}
        dispatch({type:SAGA_UPDATE_CONTACT, payload:{contact, setLoading: setEditLoading, callBack}})
    }
    const removeContact = () => {
        dispatch({type:SAGA_REMOVE_CONTACT, payload:{id:contact.id, setLoading: setRemoveLoading, callBack}})
    }
    return <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
            <Header title={contact.firstName+" "+contact.lastName} color={GlobalStyle.color.primaryColor} isFocused={isFocused}/>
            <View style={styles.inputWrapper}>
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
            </View>
            <View style={styles.footer}>
                <CustomButton
                    text={"Submit"}
                    buttonStyle={{marginVertical: 5, backgroundColor: GlobalStyle.color.tertiaryColor, borderWidth: 0}}
                    textStyle={{color: GlobalStyle.color.primaryColor}}
                    onPress={editContact}
                    showActivityIndicator={editLoading}
                />
                <CustomButton
                    text={"Delete Contact"}
                    buttonStyle={{marginVertical: 5, backgroundColor: GlobalStyle.color.negativeColor, borderWidth: 0}}
                    textStyle={{color: GlobalStyle.color.primaryColor}}
                    onPress={removeContact}
                    showActivityIndicator={removeLoading}
                />
            </View>
        </View>
    </TouchableWithoutFeedback>
}
