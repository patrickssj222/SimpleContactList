import React, {useEffect, useState} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../../store";
import {LoadingView} from "../../component/LoadingView/LoadingView";
import {SAGA_GET_CONTACT_LIST} from "../../saga/contact/actions";
import {styles} from "./HomeStyle";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import {useNavigation} from "@react-navigation/native"
import {GlobalStyle} from "../../globalstyle";
import auth from '@react-native-firebase/auth';
import {AppRoutes} from "../../constants/routes";

export const Home = () => {
    const user = useSelector((state:ReduxState)=>state.session?.displayName??state.session?.email)
    const contactList = useSelector((state:ReduxState)=>state.contactList)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    useEffect(()=>{
        dispatch({type: SAGA_GET_CONTACT_LIST, payload:{setLoading}})
    },[])
    if(loading) return <LoadingView message={["Retrieving contact list..."]}/>

    const refresh = () => {
        dispatch({type: SAGA_GET_CONTACT_LIST, payload:{setLoading}})
    }
    const signOut = () => {
        auth().signOut().then(() => console.log('User signed out!'));
    }
    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{user}</Text>
            <View style={styles.actionButtonWrapper}>
                <TouchableOpacity style={styles.actionButton} onPress={refresh}>
                    <MaterialCommunityIcon name={"refresh"} size={GlobalStyle.fontSize.titleFontSize*1.5} color={GlobalStyle.color.primaryColor}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={signOut}>
                    <MaterialCommunityIcon name={"logout"} size={GlobalStyle.fontSize.titleFontSize*1.5} color={GlobalStyle.color.primaryColor}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.listWrapper}>
            <View style={styles.listHeader}>
                <Text style={styles.listHeaderText}>Contact</Text>
            </View>
            <FlatList
                data={Object.keys(contactList)}
                renderItem={(props)=><ListItem id={props.item}/>}
                keyExtractor={(item, index)=> index.toString()}
                removeClippedSubviews
                initialNumToRender={6}
                maxToRenderPerBatch={5}
                windowSize={4}
            />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate(AppRoutes.AddContact)}>
                <MaterialIcon
                    name={"add"}
                    size={GlobalStyle.fontSize.buttonFontSize}
                    color={GlobalStyle.color.primaryColor}
                />
            </TouchableOpacity>
        </View>
    </View>
}

const ListItem = (props:{id:string}) => {
    const {id} = props
    const contact = useSelector((state:ReduxState)=>state.contactList[id], shallowEqual)
    const navigation = useNavigation()

    return <TouchableOpacity style={styles.listItemWrapper} onPress={()=>navigation.navigate({name:AppRoutes.EditContact, params:{id}})}>
        <Text style={styles.listItemText}>{contact.firstName+" "+contact.lastName}</Text>
        <MaterialCommunityIcon name={"arrow-right"} size={GlobalStyle.fontSize.headerFontSize}/>
    </TouchableOpacity>
}
