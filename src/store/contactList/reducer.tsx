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
        default:
            return state
    }
}
