import {Alert} from "react-native";

const endPoint = "https://take-home.agvisorpro.com"
import {call} from "redux-saga/effects"
import axios from "axios"
import {Contact, ContactList} from "../../store/contactList/reducer";

export default function* getContactListAPI () {
    console.log("Getting Contact List...")
    try{
        const response = yield call(() => axios({
            url: endPoint+"/contacts",
            method: "GET",
            timeout: 3000
        }))
        const mappedContactList: ContactList = response.data.reduce((acc:any, curr:any)=>{
            const mappedContact: Contact = {
                id:curr.id,
                companyName: curr.company_name,
                firstName: curr.first_name,
                lastName: curr.last_name,
                createdTime: curr.created_at,
                lastUpdatedTime: curr.last_updated_at
            }
            return {
                ...acc,
                [curr.id]: mappedContact
            }
        },{})
        return mappedContactList
    }
    catch(error){
        if(error?.response?.data?.ResponseStatus?.Message)
            Alert.alert("Error", error.response.data.ResponseStatus.Message)
        else
            Alert.alert("Error","An unexpected error occurred while retrieving contact list.")
    }
}
