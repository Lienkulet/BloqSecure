import { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);

    return(
        <Context.Provider value={{
            showLogin, 
            setShowLogin
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);