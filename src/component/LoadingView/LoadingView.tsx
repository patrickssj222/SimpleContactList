import React from "react";
import {View, Text,} from "react-native";
import LottieView from "lottie-react-native"
import loadingLottie from "../../assets/lottie/loader.json"
import { styles } from "./LoadingViewStyle";
interface Props{
    title?: string | null
    message?: string[] | null
    indicator?: any | null
}
export const LoadingView = (props:Props) =>{
    return (
        <View style={styles.container}>
            <LottieView style={styles.indicator} source={loadingLottie} autoPlay loop/>
            {
                props.title?<Text style={styles.titleText}>{props.title}</Text>:null
            }
            {
                props.message?props.message.map((message:string, index)=>{
                    return <Text key={index} style={styles.contentText}>{message}</Text>
                }):<Text style={styles.contentText}>{"Loading..."}</Text>
            }
        </View>
    )
}
