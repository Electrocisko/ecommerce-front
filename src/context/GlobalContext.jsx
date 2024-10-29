/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState(0);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const authenticateUser = (authToken) => {
        const userTokenDecoded = jwtDecode(authToken);
        setUser(userTokenDecoded.user_data);
        setToken(authToken);
        localStorage.setItem('authToken', authToken);
        
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('authToken');
    };

return (
    <GlobalContext.Provider value={{itemsInCart, setItemsInCart,user, setUser, token, authenticateUser, logout}}>
{children}

    </GlobalContext.Provider>
)
}