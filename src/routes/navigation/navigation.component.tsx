import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../asset/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.style.scss";

export const Navigation: React.FC = props => {

    const { currentUser } = useContext(UserContext);

    const handleSignOut = async () => {
        await signOutUser();
    }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            <span className="nav-link" onClick={handleSignOut} >SIGN OUT</span>
                            :
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}