import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initialState = {
  error: "",
  goals: [
    {
      id: 1,
      jumpHeight: "150cm",
      targetDate: "11 - 11 - 2019",
      startDate: "10 - 10 - 2019",
      completed: "11 - 02 - 2019"
    },
    {
      id: 2,
      jumpHeight: "140cm",
      targetDate: "12 - 12 - 2019",
      startDate: "09 - 09 - 2019",
      completed: "11 - 12 - 2019"
    },
    {
      id: 3,
      jumpHeight: "130cm",
      targetDate: "10 - 09 - 2019",
      startDate: "09 - 08 - 2019",
      completed: "10 - 01 - 2019"
    }
  ],
  loggingIn: false,
  signingUp: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
