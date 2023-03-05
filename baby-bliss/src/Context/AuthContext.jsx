import React from "react";
import { createContext } from "react";
import {auth} from "../components/firebase"
import 'firebase/auth';
import { signOut } from "firebase/auth";
export const AuthContext= createContext();

function AuthContextProvider({children}) {
   
    const [isAuth,setAuth]= React.useState(false)
    const [name,setName]= React.useState("")
    const [userId, setUserId]= React.useState(null)
    const getUserId=()=>{
    auth.onAuthStateChanged(function(user) {
        if (user) {
    setUserId(user.uid)
       setAuth(true)
        } else {
        
        }
      });
    }
    const LogoutUser=()=>{
  signOut(auth)
    }
return(
    <div>
 <AuthContext.Provider value={{isAuth,setAuth,name,setName,getUserId,userId,LogoutUser}}>
{children}
    </AuthContext.Provider>
    </div>
)
   
}

export default AuthContextProvider;

