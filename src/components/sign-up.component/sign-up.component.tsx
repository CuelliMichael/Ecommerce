import './sign-up.styles.scss';
import { useState } from "react";
import { SingUpFormModel } from "../../Model/SingUpFormModel";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { MButton } from '../button/button.component';

export const SignUpForm: React.FC = props => {

    const [formFields, setFormFields] = useState<SingUpFormModel>(SingUpFormModel.getDefault());

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formFields.password === formFields.confirm_password) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password);
                await createUserDocumentFromAuth({ ...user, displayName: formFields.displayName });

                resetFormField();
            } catch (error: any) {
                if (error.code === "auth/email-already-in-use") {
                    alert('cannot create the user, email already in use');
                }
                console.log('error creating the user', error)
            }
        } else {
            alert('password do not match');
        }
    }

    const resetFormField = () => {
        setFormFields(SingUpFormModel.getDefault());
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sing up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    label="Display Name"
                    type={"text"}
                    value={formFields.displayName}
                    onChange={handleChanges}
                    required
                />

                <FormInput
                    name="email"
                    label="Email"
                    type={"email"}
                    value={formFields.email}
                    onChange={handleChanges}
                    required
                />

                <FormInput
                    name="password"
                    label="Password"
                    type={"password"}
                    value={formFields.password}
                    onChange={handleChanges}
                    required
                />

                <FormInput
                    name="confirm_password"
                    label="Verify Password"
                    type={"password"}
                    value={formFields.confirm_password}
                    onChange={handleChanges}
                    required
                />
                <MButton type='submit' >Sing Up</MButton>
            </form>
        </div>
    )
}