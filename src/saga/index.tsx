import { all } from 'redux-saga/effects'
import {watchAuthenticationAsync} from "./authentication/authentication";

export function* rootSaga(){
    yield all([
        watchAuthenticationAsync()
    ])
}
