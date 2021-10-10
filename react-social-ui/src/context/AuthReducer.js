const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        // ...state,
        // isAuthenticated: true,
        // user: action.payload,
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        // ...state,
        // isAuthenticated: true,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        // ...state,
        // isAuthenticated: true,
        user: null,
        isFetching: false,
        error: action.payload,
      };
    // case 'LOGOUT':
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //     user: null,
    //   };
    case 'FOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
        // isFetching: false,
        error: null,
      };
    case 'UNFOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
        // isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;