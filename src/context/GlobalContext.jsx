/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState(0);
    const [user, setUser] = useState("User");

return (
    <GlobalContext.Provider value={{itemsInCart, setItemsInCart,user, setUser}}>
{children}

    </GlobalContext.Provider>
)
}