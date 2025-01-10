import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,signOut, updateProfile} from 'firebase/auth';
import UseAxiosPublic from '../CustomHooks/UseAxiosPublic';
import { data } from 'react-router-dom';

 export const authContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] =  useState(null)
    const [loading,setLoading] = useState(true)
    const axiosPublic = UseAxiosPublic()

    //sign up with firebase
    const signUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
   

    useEffect(()=>{
        const unScripbe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if(currentUser){
                const userInfo =  {email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                    setLoading(false)
                })
                
               
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
               
            }
           
            
        })
        return ()=>{
            return unScripbe()
        }
    },[axiosPublic])

    const userInfo = {

        user,
        loading,
        signUp,
        setUser,
        login,
       
        logOut


    }
    

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
        
    );
};

export default AuthProvider;