import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS,LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

const { getLocalData } = require("../../utils/localstorage");

const initialState={
    isAuth:false,
    token:getLocalData("key"),
    isError:false,
    isLoading:false
}
 export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;

    switch (type) {
        case SIGNUP_SUCCESS:
            return {...state,isError:false,isLoading:false}
           
        case SIGNUP_LOADING:
            return {...state,isError:false,isLoading:true}
           
        case SIGNUP_ERROR:
            return {...state,isError:true,isLoading:false}
    
        case  LOGIN_SUCCESS:
            return {...state,isAuth:true,isError:false,isLoading:false}
           
        case  LOGIN_LOADING:
            return {...state,isError:false,isLoading:true}
           
        case LOGIN_ERROR:
            return {...state,isAuth:false,isError:true,isLoading:false}
    
    
        default:
            return state
    }
}
