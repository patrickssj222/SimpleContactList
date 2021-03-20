import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
    Keyboard,
    Image,
} from 'react-native'
import styles from './SignUpStyle'
import { GlobalStyle } from '../../globalstyle'
import {CustomButton, Header} from "../../component";
import Logo from "../../assets/img/Logo.png";
import { ScrollView } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const isFocused = useIsFocused()
    const submit = async () => {
        await setLoading(true)
        await auth().createUserWithEmailAndPassword(email, password).then(() => {
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
                    style={{ flex: 1, justifyContent: 'center' }}
                >
                    <Header color={GlobalStyle.color.primaryColor} title={"Sign Up"} isFocused={isFocused}/>
                    <View style={styles.imageContainer}>
                        <Image source={Logo} resizeMethod={'auto'} resizeMode={'contain'} style={styles.logo}/>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={email}
                                textContentType={"emailAddress"}
                                onChangeText={e => setEmail(e)}
                                style={styles.textInput}
                                placeholder={"Email"}
                                editable={!loading}
                            />
                            <TextInput
                                textContentType={"password"}
                                secureTextEntry
                                value={password}
                                onChangeText={e => setPassword(e)}
                                style={styles.textInput}
                                placeholder={"Password"}
                                editable={!loading}
                            />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <CustomButton
                            onPress={submit}
                            text={"Sign Up"}
                            buttonStyle={styles.signUpButton}
                            textStyle={styles.signUpButtonText}
                            showActivityIndicator={loading}
                            activityIndicator={<ActivityIndicator color={GlobalStyle.color.primaryColor} />}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableOpacity>
    )
}
