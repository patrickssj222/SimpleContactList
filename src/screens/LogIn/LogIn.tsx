import React, { useState } from 'react'
import {
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
    Keyboard,
    Text,
    TextInput,
    ActivityIndicator,
    Image,
    ScrollView,
} from 'react-native'
import { styles } from './LogInStyles'
import {CustomButton, Header} from '../../component'
import { GlobalStyle } from "../../globalstyle"
import Logo from "../../assets/img/Logo.png"
import {AppRoutes} from "../../constants/routes";
import { useNavigation } from '@react-navigation/native'
import auth from "@react-native-firebase/auth";

export const LogIn = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const submit = async () => {
        await setLoading(true)
        await auth().signInWithEmailAndPassword(email, password).then(() => {
            console.log('User account created & signed in!');
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
    }
    return (
        <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1} style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : undefined}
                    style={{ flex: 1, alignItems:'center' }}
                >
                    <View style={styles.imageContainer}>
                        <Image source={Logo} resizeMethod={'auto'} resizeMode={'contain'} style={styles.logo}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={email}
                            textContentType={"emailAddress"}
                            editable={!loading}
                            onChangeText={e => setEmail(e)}
                            style={styles.textInput}
                            placeholder={"Email"}
                        />
                        <TextInput
                            textContentType={"password"}
                            secureTextEntry
                            value={password}
                            editable={!loading}
                            onChangeText={e => setPassword(e)}
                            style={styles.textInput}
                            placeholder={"Password"}
                        />
                    </View>
                    <View style={styles.loginActionContainer}>
                            <CustomButton
                                onPress={submit}
                                text={"Log In"}
                                buttonStyle={styles.loginButton}
                                textStyle={styles.loginButtonText}
                                showActivityIndicator={!!loading}
                                activityIndicator={<ActivityIndicator color={GlobalStyle.color.primaryColor}/>}
                            />
                            <TouchableOpacity
                                style={styles.additionalActionButton}
                                onPress={() => navigation.navigate(AppRoutes.SignUp)}
                            >
                                <Text style={styles.additionalActionText}>{"Sign Up"}</Text>
                            </TouchableOpacity>
                        </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableOpacity>
    )
}
