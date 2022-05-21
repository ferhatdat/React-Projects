import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA8pPtMze2yrfDRMoH4rbCsRgfwwuVtO_4",
    authDomain: "new-movie-app-f7df6.firebaseapp.com",
    projectId: "new-movie-app-f7df6",
    storageBucket: "new-movie-app-f7df6.appspot.com",
    messagingSenderId: "53801304809",
    appId: "1:53801304809:web:2672470a4f1fba36d3e678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        navigate('/home')

    } catch (error) {
        alert(error.message)
    }
}

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        navigate('/home')
    } catch (error) {
        alert(error.message)
    }
}

export const logOut = () => {
    signOut(auth)
    alert('logged out succesfully')
}

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
        } else {
            setCurrentUser(false)
        }
    });
}
export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            navigate('/home')
        }).catch((error) => {
            console.log(error)
        });

}

