import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: {
  //   _id: "615f3996cada0b81121dc538",
  //   username: "hey",
  //   email: "hey@mail.com",
  //   profilePicture: "https://i.picsum.photos/id/629/200/300.jpg?hmac=YTSnJIQbXgJTOWUeXAqVeQYHZDodXXFFJxd5RTKs7yU",
  //   coverPicture: "https://i.picsum.photos/id/529/200/300.jpg?hmac=WqdWbOIAJ1H2q4r92Fc4KXM--xvRadidXmV5P2R1rDg",
  //   isAdmin: false,
  //   followers: [],
  //   followings: [],
  //   // posts: [],
  //   // description: "Rogue Dwarf",
  //   // city: "Industrial Harbors",
  //   // country: "Canada",
  //   // from: "Atlantis",
  //   // website: "",
  //   // isVerified: false,
  //   // isBlocked: false,
  // },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};