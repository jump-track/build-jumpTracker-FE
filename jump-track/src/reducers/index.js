import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE
} from "../actions";

const initialState = {
  error: "",
  goals: [],
  loggingIn: false,
  signingUp: false,
  fetchingData: false,
  postingData: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_START:
      return {
        ...state,
        error: "",
        posting: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        goals: [...action.payload],
        posting: false
      };
    case POST_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        goals: [...action.payload]
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case REGISTER_START:
      return {
        ...state,
        error: "",
        signingUp: true,
        loggingIn: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: "",
        signingUp: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case LOGIN_START:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    default:
      return state;
  }
};

export default reducer;
