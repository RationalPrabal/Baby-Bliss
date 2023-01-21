import React from "react";
import { createContext } from "react";

export const CartContext= createContext();

function CartContextProvider({children}) {
    const [cartCount,setCartCount]= React.useState(0);
    const [text,setText]= React.useState("")

 
return(
    <div>
 <CartContext.Provider value={{cartCount,setCartCount,text,setText}}>
{children}
    </CartContext.Provider>
    </div>
)
   
}

export default CartContextProvider;

