import { all } from 'redux-saga/effects'
import {watchContactAsync} from "./contact/contact";

export function* rootSaga(){
    yield all([
        watchContactAsync()
    ])
}
