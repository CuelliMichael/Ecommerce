import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


export const SignIn: React.FC = props => {

    const logGoogleUser = async () => {

        const { user }  = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }

    return (
        <>
            <button onClick={logGoogleUser}>
                sign in  with google
            </button>
        </>
    )
}