import * as actionTypes from "./actions"
export interface Session{
    id: string,
    displayName: string,
    email:string,
    emailVerified:boolean,
    isAnonymous: boolean,
    metadata:{
        creationTime: number,
        lastSignInTime: number
    }
}

const initialState: Session|null = null
export const session = (state = initialState, action:any)=>{
    switch (action.type) {
        case actionTypes.UPDATE_SESSION_INFO:
            console.log("Updating session info...")
            return action.payload.sessionInfo
        default:
            return state
    }
}
