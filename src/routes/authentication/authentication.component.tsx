import { SingInForm } from "../../components/sign-in.component/sing-in-form.component";
import { SignUpForm } from "../../components/sign-up.component/sign-up.component";
import './authentication.styles.scss';

export const Authentication: React.FC = props => {

    return (
        <div className="sign-in-group">
            <SingInForm />
            <SignUpForm />
        </div>
    )
}