import {takeLeading} from "redux-saga/effects"
import * as actionTypes from "./actions"
import auth from "@react-native-firebase/auth";

function* signUp(){
}
export function* watchAuthenticationAsync(){
    yield takeLeading(actionTypes.SAGA_SIGN_UP, signUp)
}
