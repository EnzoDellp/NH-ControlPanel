export const initialState = {
  username: "",
  password: "",
  loading: false,
  error: null,
};

export function loginReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
