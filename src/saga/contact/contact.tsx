import {takeLeading, takeEvery, call, delay, put} from "redux-saga/effects"
import * as actionTypes from "./actions"
import {addContactAPI, editContactAPI, getContactListAPI, removeContactAPI} from "./api";
import {UPDATE_CONTACT_LIST} from "../../store/contactList/actions";
import {ContactList} from "../../store/contactList/reducer";
function* getContactList(action:any){
    const {setLoading} = action.payload
    if(setLoading) yield call(setLoading,true)
    const contactList:ContactList = yield getContactListAPI()
    yield put({type: UPDATE_CONTACT_LIST, payload:{contactList}})
    yield delay(500)
    if(setLoading) yield call(setLoading,false)
}
function* addContact(action:any){
    const {setLoading, contact, callBack} = action.payload
    if(setLoading) yield call(setLoading,true)
    yield delay(500)
    const response = yield addContactAPI(contact)
    if(response){
        yield call(getContactList, {payload:{setLoading}})
        if(callBack) yield call(callBack)
    }
    else{
        if(setLoading) yield call(setLoading,false)
    }
}

function* updateContact(action:any){
    const {setLoading, contact, callBack} = action.payload
    if(setLoading) yield call(setLoading,true)
    yield delay(500)
    const response = yield editContactAPI(contact)
    if(response){
        yield call(getContactList, {payload:{setLoading}})
        if(callBack) yield call(callBack)
    }
    else{
        if(setLoading) yield call(setLoading,false)
    }
}
function* removeContact(action:any){
    const {setLoading, id, callBack} = action.payload
    if(setLoading) yield call(setLoading,true)
    yield delay(500)
    const response = yield removeContactAPI(id)
    if(response){
        if(callBack) yield call(callBack)
        yield call(getContactList,{payload:{}})
    }
    else{
        if(setLoading) yield call(setLoading,false)
    }
}
export function* watchContactAsync(){
    yield takeLeading(actionTypes.SAGA_GET_CONTACT_LIST, getContactList)
    yield takeEvery(actionTypes.SAGA_ADD_CONTACT, addContact)
    yield takeEvery(actionTypes.SAGA_UPDATE_CONTACT, updateContact)
    yield takeEvery(actionTypes.SAGA_REMOVE_CONTACT, removeContact)
}
