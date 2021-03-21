import {takeLeading, takeEvery, call, delay, put} from "redux-saga/effects"
import * as actionTypes from "./actions"
import getContactListAPI from "./api";
import {UPDATE_CONTACT_LIST} from "../../store/contactList/actions";
function* getContactList(action:any){
    const {setLoading} = action.payload
    if(setLoading) yield call(setLoading,true)
    const contactList = yield getContactListAPI()
    yield put({type: UPDATE_CONTACT_LIST, payload:{contactList}})
    yield delay(500)
    if(setLoading) yield call(setLoading,false)
}
function* addContact(){
}
function* updateContact(){
}
function* removeContact(){
}
export function* watchContactAsync(){
    yield takeLeading(actionTypes.SAGA_GET_CONTACT_LIST, getContactList)
    yield takeEvery(actionTypes.SAGA_ADD_CONTACT, addContact)
    yield takeEvery(actionTypes.SAGA_UPDATE_CONTACT, updateContact)
    yield takeEvery(actionTypes.SAGA_REMOVE_CONTACT, removeContact)
}
