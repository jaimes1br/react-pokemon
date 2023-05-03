import { LoginUser, RegisterUser } from "../shared/types";
import { FirebaseAuth } from "./config";
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    updateProfile } from "firebase/auth";

    
const googleProvider = new GoogleAuthProvider();

export const registerUserWithEmailPassword = async({ email, password, displayName}: RegisterUser) => {
    try {
        
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        
        if(!FirebaseAuth.currentUser ){
            throw new Error('No hay usuario current')
        }

        await updateProfile( FirebaseAuth.currentUser , { displayName }  )
        
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error: any) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async({ email, password }: LoginUser) =>{

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password);
        
        const { displayName, photoURL, uid } = resp.user; 
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        
    } catch (error: any) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const singInWithGoogle = async () => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        
        const { displayName, email, photoURL, uid } = result.user; 
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        
    } catch (error: any) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}