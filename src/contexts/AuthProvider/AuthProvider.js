import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init'




export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoading] = useState(true)



    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.createUser, profile)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser);

            // if (currentUser === null || currentUser.emailVerified) {

            // }
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, providerLogin, logOut, createUser, signIn, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;