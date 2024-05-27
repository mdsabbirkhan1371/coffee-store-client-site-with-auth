import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    

    // create user 

    const createUser =(email,paassword)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,paassword)
    }

    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const informationData={
        user,
        loading,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={informationData}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;