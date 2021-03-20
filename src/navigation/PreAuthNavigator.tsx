import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LogIn } from "../screens/LogIn/LogIn"
import { SignUp } from '../screens/SignUp/SignUp'
import { AppRoutes } from '../constants/routes'
const Stack = createStackNavigator();
export const PreAuthNavigator = () => {
    return(
        <Stack.Navigator
            headerMode={"none"}
        >
            <Stack.Screen
                name={AppRoutes.LogIn}
                component={LogIn}
            />
            <Stack.Screen
                name={AppRoutes.SignUp}
                component={SignUp}
            />
        </Stack.Navigator>
    )
}
