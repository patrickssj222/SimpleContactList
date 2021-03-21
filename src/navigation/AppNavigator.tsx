import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "../constants/routes";
import {Home} from "../screens/Home/Home";
import {AddContact} from "../screens/AddContact/AddContact";
import {EditContact} from "../screens/EditContact/EditContact";

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
            <Stack.Screen
                name={AppRoutes.AddContact}
                component={AddContact}
            />
            <Stack.Screen name={AppRoutes.EditContact}>
                {(props:any)=><EditContact
                    {...props}
                    id={props.id}
                />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
