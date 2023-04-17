import { User } from "../Actions";

const initialState: User = {
  userName: null,
  isLoggedIn: false,
  emailId: null,
};

interface Action {
  type: string;
  payload: User;
}

const checkUserStatus = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        userName: action.payload.userName,
        isLoggedIn: action.payload.isLoggedIn,
        emailId: action.payload.emailId,
      };
    case "SIGN_OUT":
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default checkUserStatus;
