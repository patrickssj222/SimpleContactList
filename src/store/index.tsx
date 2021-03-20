import {combineReducers} from "redux";
import {ContactList, contactList} from "./contactList/reducer";
import {Session, session} from "./session/reducer";

export interface ReduxState{
    session: Session,
    contactList: ContactList
}
export const rootReducer = combineReducers({
    contactList,
    session
})
