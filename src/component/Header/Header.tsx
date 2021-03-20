import {GlobalStyle} from "../../globalstyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, {useCallback, useEffect, useState} from "react";
import {styles} from "./HeaderStyle";
import { HeaderBackButton } from "@react-navigation/stack";
import { useNavigation, useNavigationState, } from '@react-navigation/native';
import {View, Text} from "react-native";
import {CustomStatusBar} from "../CustomStatusBar/CustomStatusBar";

interface Props{
    color: string,
    textColor?: string,
    title: string,
    disableBack?: boolean
    children?: any
    headerRight?: any
    barStyle?: string
    onBackPress?: () => any
    isFocused: boolean
}
export const Header = (props:Props) => {
    const {color, textColor, title, disableBack, children, barStyle, onBackPress, headerRight, isFocused} = props

    return(
        <View>
            <CustomStatusBar backgroundColor={color} barStyle={barStyle} isFocused={isFocused}/>
            <View style={[styles.contentContainer, {backgroundColor: color}]}>
                {!disableBack ?<HeaderLeft onBackPress={onBackPress} textColor={textColor}/>:<View style={styles.headerLeft}/>}
                {
                    children?children:<View style={styles.headerCenter}>
                        <Text style={[styles.titleText, {color:textColor?textColor:GlobalStyle.color.secondaryColor}]}>{title}</Text>
                    </View>
                }
                <HeaderRight>{headerRight}</HeaderRight>
            </View>
        </View>
    )
}
export const HeaderLeft = (props:{textColor?:string, onBackPress?: () => any}) => {
    const navigation = useNavigation();
    const [disabled, setDisabled] = useState(false)
    const debounce = (func:any, wait:number) => {
        let timeout:any;
        return function executedFunction(...args:any) {
            setDisabled(true)
            const later = () => {
                clearTimeout(timeout);
                func(...args);
                setTimeout(() => {if(setDisabled)setDisabled(false)}, 250)
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    const handleBackPress = () => {
        props.onBackPress?props.onBackPress():navigation.goBack()
    }

    return(
        <View style={styles.headerLeft}>
            <HeaderBackButton
                backImage={()=><Icon
                    name={"keyboard-arrow-left"}
                    size={GlobalStyle.size.headerIconSize}
                    color={props.textColor?props.textColor:GlobalStyle.color.secondaryColor}
                />}
                disabled={disabled}
                onPress={debounce(handleBackPress,250)}
                labelVisible={false}
            />
        </View>

    )
}

export const HeaderRight = (props:{children:any}) => {
    return(
        <View style={styles.headerRight}>
            {props.children}
        </View>
    )
}
