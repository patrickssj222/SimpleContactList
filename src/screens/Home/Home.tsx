import React, {useEffect, useState} from "react";
import {Text, View} from "react-native"
import auth from "@react-native-firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../../store";
import {LoadingView} from "../../component/LoadingView/LoadingView";
import {SAGA_GET_CONTACT_LIST} from "../../saga/contact/actions";

export const Home = () => {
    const user = useSelector((state:ReduxState)=>state.session.displayName??state.session.email)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type: SAGA_GET_CONTACT_LIST, payload:{setLoading}})
    },[])
    if(loading) return <LoadingView message={["Retrieving contact list..."]}/>
    return <View>
        <View>
            <Text>{user}</Text>
        </View>
    </View>
}
