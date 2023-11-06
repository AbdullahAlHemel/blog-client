import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
       };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           console.log('user in the auth state changed', currentUser);
           setUser(currentUser);
           setLoading(false)
       });
       return () =>{
        unsubscribe();
       }
   },[])

    const userInfo = {
        user,
        loading,    
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
    }

    return (

        
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>     
     
    );
};

export default AuthProvider;    