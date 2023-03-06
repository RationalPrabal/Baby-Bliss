import React from "react";
import { createContext } from "react";
import axios from "axios";
export const CartContext= createContext();

function CartContextProvider({children}) {
    
  
    const [user,setUser]= React.useState(null)
    const getUserData=async(id)=>{
   
        try{
let data= await axios.get(`https://troubled-organized-denim.glitch.me/user/${id}`)
    setUser(data.data)
   
        }
        catch(err){
    console.log(err)
        }
      }

   
 
return(
    <div>
 <CartContext.Provider value={{getUserData,user}}>
{children}
    </CartContext.Provider>
    </div>
)
   
}

export default CartContextProvider;

