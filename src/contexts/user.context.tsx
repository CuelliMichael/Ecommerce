import React, { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (() => null) as React.Dispatch<any>
});

export const UserProvider: React.FC<any> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(
        () => {
            const unsubscribe = onAuthStateChangedListener( //check the event of a user that log in and out
                (user:any) => {
                    if(user){
                        createUserDocumentFromAuth(user); //use this when we sign in with google
                    }
                    setCurrentUser(user);
                }
            );

            return unsubscribe;
        }, []
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}