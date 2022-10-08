import { ADD_DATA_ERROR, ADD_DATA_LOADING, ADD_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, REPLACE_DATA_ERROR, REPLACE_DATA_LOADING, REPLACE_DATA_SUCCESS, UPDATE_DATA_ERROR, UPDATE_DATA_LOADING, UPDATE_DATA_SUCCESS } from "./actionType";
import axios from 'axios'


// For getting the data

export const Get_Data = (query) => (dispatch) => {
    dispatch({ type:GET_DATA_LOADING});
  query=query?query:""
    return axios

      .get(`http://localhost:3000/data/get?source=${query}`)
      .then((r) => {
        dispatch({ type:GET_DATA_SUCCESS, payload: r.data });
      })
      .catch((e) => {
        dispatch({ type:GET_DATA_ERROR, payload: e });
      });
  };

//for adding movies
 export  const Add_movie = ( payload) => (dispatch) => {
    dispatch({ type: ADD_DATA_LOADING });
  
    return axios
    
      .post(`http://localhost:3000/data/add`, payload)
      .then((r) => {
        dispatch({ type:ADD_DATA_SUCCESS, payload: r });
      })
      .catch((e) => {
        dispatch({ type: ADD_DATA_ERROR, payload: e });
      });
  };

  //For Updating on data
  export const Update_Movie = (id, payload) => (dispatch) => {
    dispatch({ type: UPDATE_DATA_LOADING });
  
    return axios
      .patch(`https://radiant-plateau-70563.herokuapp.com/tasks/${id}`, payload)
      .then((r) => {
        dispatch({ type: UPDATE_DATA_SUCCESS, payload: r });
      })
      .catch((e) => {
        dispatch({ type: UPDATE_DATA_ERROR, payload: e });
      });
  };


  // For Replacing on any particular data
  export const Replace_Movie = (id, payload) => (dispatch) => {
    dispatch({ type: REPLACE_DATA_LOADING });
  
    return axios
      .put(`https://radiant-plateau-70563.herokuapp.com/tasks/${id}`, payload)
      .then((r) => {
        dispatch({ type: REPLACE_DATA_SUCCESS, payload: r });
      })
      .catch((e) => {
        dispatch({ type: REPLACE_DATA_ERROR, payload: e });
      });
  };
  