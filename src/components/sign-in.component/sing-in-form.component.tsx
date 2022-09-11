import { FormInput } from "../form-input/form-input.component"
import { useState } from "react"
import { SingInFormModel } from "../../Model/SingInFormModel"
import { MButton } from "../button/button.component"
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import './sing-in-form.style.scss';

export const SingInForm: React.FC = props => {

    const [sing_in, setSignIn] = useState<SingInFormModel>(SingInFormModel.getDefault());

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignIn({ ...sing_in, [name]: value });
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(sing_in.email, sing_in.password);

            resetFields();
        } catch (error: any) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert('Incorrect password for the email');
                    break;
                case "auth/user-not-found":
                    alert('no user is associated with this email');
                    break;
                default:
                    alert('an error was occoured in creating the values');
                    console.log(error);
            }
        }
    }

    const resetFields = () => {
        setSignIn(SingInFormModel.getDefault());
    }

    return (
        <div className="sing-in-container">
            <form onSubmit={handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <FormInput
                    label="Email"
                    type={"email"}
                    name="email"
                    value={sing_in.email}
                    onChange={handleChanges}
                    required
                />
                <FormInput
                    label="Password"
                    name="password"
                    type={"password"}
                    value={sing_in.password}
                    onChange={handleChanges}
                    required
                />
                <div className="sign-in-button-container">
                    <MButton type='submit' >Sing In</MButton>
                    <MButton
                        type='button'
                        button_style='google-sign-in'
                        onClick={logGoogleUser}
                    >
                        Google Sign In
                    </MButton>
                </div>
            </form>
        </div>
    )
}