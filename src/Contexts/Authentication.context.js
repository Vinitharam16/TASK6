import React, { createContext, useState, useContext } from "react";

// 1. Create context
// 2. Mention what context will store inside it.
// 3. create Contextprovider and return the provider with children wrapped
// 4. Create useHook to expose the data and functions available.

const AuthContext = createContext({
    loggedIn: false,
    setLoggedIn: () => { }
});

export const useAuthentication = () => useContext(AuthContext);

export default function AuthenticationContextProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState( false );

    const props = {
        loggedIn,
        setLoggedIn,
    }

    return <AuthContext.Provider value={props}>
        {children}
    </AuthContext.Provider>

}