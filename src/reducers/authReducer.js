const INITAL_STATE = {
  isSignedIn: false,
};
const authReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
