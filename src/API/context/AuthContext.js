import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//creating authCOntext API here
const AuthContext = createContext();

//AuthContextProvider function created to provide authentication functionality to all its children as props
export function AuthContextProvider({children}){

  //State to store current user
  const [user, setUser] = useState({});

  //function for signing up of new user
  function signUp(email, password){
      createUserWithEmailAndPassword(auth, email, password);

  }

  //function to handle existing user
  function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
      // console.log(auth.currentUser);
  }

  //for logging out current user
  function logOut(){
      return signOut(auth)
  }

  //Hook to monitor the changes in authentication state
  useEffect(()=>{

    //listener to update user state when authentication state changes
      const unfollow = onAuthStateChanged(auth, (currentUser)=>{
          setUser(currentUser)
      });

      //component unmounting ke time clean up
      return () => {
          unfollow();
      }
  })


  return( 
    //Prociding authentication context values 
    <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
    {children}
    </AuthContext.Provider>
    );
  }

//hook to consume new context in functional components
export function UserAuth() {
  return useContext(AuthContext);
}