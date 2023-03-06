import React from "react";
import { createContext } from "react";
import axios from "axios";
export const CartContext= createContext();

function CartContextProvider({children}) {
    
  const [text,setText]= React.useState("")
    const [user,setUser]= React.useState(null)
    const getUserData=async(id)=>{
   
        try{
    let data= await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/user/${id}`)
    setUser(data.data)
   
        }
        catch(err){
    console.log(err)
        }
      }

   
 
return(
    <div>
 <CartContext.Provider value={{getUserData,user,text,setText}}>
{children}
    </CartContext.Provider>
    </div>
)
   
}

export default CartContextProvider;

