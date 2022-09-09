import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSP290wMvs_tpwijWng4ELVQNccJJBlUg",
    authDomain: "ecommerce-example-70579.firebaseapp.com",
    projectId: "ecommerce-example-70579",
    storageBucket: "ecommerce-example-70579.appspot.com",
    messagingSenderId: "426004023460",
    appId: "1:426004023460:web:2be51c0c16189bc04fbe31"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
    {
        prompt: "select_account"
    }
);

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); //tell us the actual dataabase 

export const createUserDocumentFromAuth = async (userAuth: any) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef); //this is the data of the document

    //userSnapshot.exist tell us if inside the database the document exists or not
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(
                userDocRef, {
                   displayName,
                   email,
                   createdAt 
                }
            )
        }catch (error) {
            console.log('an error was occoured in creating the values',error)
        }
    }
}

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {

    return await createUserWithEmailAndPassword(auth, email,password); // crea un utente con l'email e la psw date
}

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {

    return await signInWithEmailAndPassword(auth, email,password); // controlla se l'email e la psw inserite esistono nel db
    //return an object with a variable "user" that inside has the information of the user and the accesstoken
}