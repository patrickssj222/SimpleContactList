import * as actionTypes from "./actions"

export interface ContactList{
    [id:string]:Contact
}

export interface Contact{
    id: string,
    firstName: string,
    lastName: string,
    companyName: string,
    lastUpdatedTime: string,
    createdTime: string
}

const initialState: ContactList = {}

export const contactList = (state = initialState, action:any)=>{
    switch (action.type) {
        case actionTypes.UPDATE_CONTACT_LIST:
            return action.payload.contactList
        default:
            return state
    }
}
