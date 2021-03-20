import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./CustomButtonStyle";
type Props = {
    onPress:                                ()=>any
    text:                                   string
    buttonStyle?:                           {} | []
    textStyle?:                             {} | []
    hitSlop?:                               { top: number, left: number, bottom: number, right: number}
    disabled?:                              boolean
    activityIndicator?:                     any
    showActivityIndicator?:                 boolean
    shouldActivityIndicatorReplaceText?:    boolean
}

export const CustomButton = (props: Props) => {
    const buttonStyle = Array.isArray(props.buttonStyle)?props.buttonStyle:[props.buttonStyle]
    const textStyle = Array.isArray(props.textStyle)?props.textStyle:[props.textStyle]
    const activityIndicator = props.showActivityIndicator?props.activityIndicator?props.activityIndicator:<ActivityIndicator/>:null
    const text = !props.showActivityIndicator||props.shouldActivityIndicatorReplaceText===false?<Text style={[styles.buttonText, ...textStyle]}>{props.text}</Text>:null
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, ...buttonStyle]}
            hitSlop={props.hitSlop}
            disabled={props.disabled}
        >
            {activityIndicator}
            {text}
        </TouchableOpacity>
    )
}
