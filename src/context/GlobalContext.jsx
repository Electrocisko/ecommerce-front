/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState(0);

return (
    <GlobalContext.Provider value={{itemsInCart, setItemsInCart}}>
{children}

    </GlobalContext.Provider>
)
}