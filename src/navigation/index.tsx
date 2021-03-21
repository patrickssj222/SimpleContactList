import React, {useEffect, useState} from "react"
import {PreAuthNavigator} from "./PreAuthNavigator";
import {AppNavigator} from "./AppNavigator";
import auth from "@react-native-firebase/auth";
import { useDispatch } from 'react-redux'
import {UPDATE_SESSION_INFO} from "../store/session/actions";
import {Session} from "../store/session/reducer";
export const RootNavigator = () => {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()
    const dispatch = useDispatch()
    // Handle user state changes
    function onAuthStateChanged(user:any) {
        setUser(user)
        if(user?.uid){
            const sessionInfo:Session = {
                id: user.uid,
                displayName: user.displayName,
                email: user.email,
                emailVerified: user.emailVerified,
                isAnonymous: user.isAnonymous,
                metadata: user.metadata
            }
            dispatch({type: UPDATE_SESSION_INFO, payload: {sessionInfo}})
        }
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return <PreAuthNavigator/>;
    }
    return <AppNavigator/>;
}
