import React from "react";
import {Text, View} from "react-native"
import auth from "@react-native-firebase/auth";
import {useSelector} from "react-redux";
import {ReduxState} from "../../store";

export const Home = () => {
    const user = useSelector((state:ReduxState)=>state.session.displayName??state.session.email)
    return <View>
        <View>
            <Text>{user}</Text>
        </View>
    </View>
}
