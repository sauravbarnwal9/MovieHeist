import {
  ADD_DATA_SUCCESS,
  ADD_DATA_LOADING,
  ADD_DATA_ERROR,
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  GET_DATA_ERROR,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_LOADING,
  UPDATE_DATA_ERROR,
  REPLACE_DATA_SUCCESS,
  REPLACE_DATA_LOADING,
  REPLACE_DATA_ERROR,
} from "./actionType";

const { getLocalData } = require("../../utils/localstorage");

const initialState = {
  Movie_Data: [],
  isError: false,
  isLoading: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // ADDING DATA
    case ADD_DATA_SUCCESS:
      return { ...state, isError: false, isLoading: false };

    case ADD_DATA_LOADING:
      return { ...state, isError: false, isLoading: true };

    case ADD_DATA_ERROR:
      return { ...state, isError: true, isLoading: false };

    //    GETTING DATA
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        Movie_Data: payload,
      };

    case GET_DATA_LOADING:
      return { ...state, isError: false, isLoading: true };

    case GET_DATA_ERROR:
      return { ...state, isError: true, isLoading: false };

    //  UPDATING DATA

    case UPDATE_DATA_SUCCESS:
      return { ...state, isError: false, isLoading: false };

    case UPDATE_DATA_LOADING:
      return { ...state, isError: false, isLoading: true };

    case UPDATE_DATA_ERROR:
      return { ...state, isError: true, isLoading: false };

    // REPLACING DATA
    case REPLACE_DATA_SUCCESS:
      return { ...state, isError: false, isLoading: false };

    case REPLACE_DATA_LOADING:
      return { ...state, isError: false, isLoading: true };

    case REPLACE_DATA_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
