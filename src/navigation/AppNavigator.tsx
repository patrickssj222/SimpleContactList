import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "../constants/routes";
import {Home} from "../screens/Home/Home";

const Stack = createStackNavigator();
export const AppNavigator = () => {
    return(
        <Stack.Navigator
            headerMode={"none"}
        >
            <Stack.Screen
                name={AppRoutes.Home}
                component={Home}
            />
        </Stack.Navigator>
    )
}
