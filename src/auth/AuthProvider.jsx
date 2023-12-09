import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase.config";
import axios from "axios";
const auth = getAuth(app);

export const AuthContext = createContext();

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
            const userEmail = currentUser?.email || user?.email; 
            const loggedUser = { email: userEmail }
           console.log('user in the auth state changed', currentUser);
           setUser(currentUser);
           setLoading(false)
            
           if(currentUser){
            const loggedUser = {email: currentUser.email}
            axios.post('http://localhost:5000/jwt' ,loggedUser, {withCredentials: true})
            .then(res => {
                console.log('token response' , res.data);
            })
           }
           else{
            axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials: true
            })
            .then(res => {
                console.log('logging out', user);
                console.log(res.data);
            })
           }
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