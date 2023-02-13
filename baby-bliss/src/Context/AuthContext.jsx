import React from "react";
import { createContext } from "react";

export const AuthContext= createContext();

function AuthContextProvider({children}) {
   
    const [auth,setAuth]= React.useState(false)
    const [name,setName]= React.useState("")

 
return(
    <div>
 <AuthContext.Provider value={{auth,setAuth,name,setName}}>
{children}
    </AuthContext.Provider>
    </div>
)
   
}

export default AuthContextProvider;

