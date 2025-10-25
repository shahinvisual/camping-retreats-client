import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    // Login With Google-------------------------
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // User New Account Register-------------------------
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Login With Email & Password-------------------------
    const loginWithPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // Updated Profile-------------------------
    const userProfileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    };
    //  Password Reset---------------------
    const PasswordReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // LogOut-------------------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const AuthInfo = {
        user,
        loading,
        userProfileUpdate,
        loginWithGoogle,
        userRegister,
        loginWithPassword,
        PasswordReset,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;