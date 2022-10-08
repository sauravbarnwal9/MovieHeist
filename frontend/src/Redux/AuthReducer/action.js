import axios from "axios";
import { UPDATE_DATA_LOADING, UPDATE_DATA_SUCCESS } from "../AppReducer/actionType";
import * as types from "./actionType";

export const Signup = (state) => (dispatch) => {
  dispatch({ type: types.SIGNUP_LOADING });
  return (
    axios
      .post("http://localhost:8080/user/signup", state)

     
      .then((r) => {
 
        dispatch({ type: types.SIGNUP_SUCCESS });
      })
      .catch((e) =>{
        dispatch({type:types.SIGNUP_ERROR})
      })
  );
};
export const Login = (state) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  return axios
    .post("http://localhost:8080/user/login", state)

    .then((r) => {
      
      saveLocalData("key", r.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
     
    })

    .catch((e) => {
      console.log(e);
      dispatch({ type: types.LOGIN_ERROR, payload: e });
    })

  
};



