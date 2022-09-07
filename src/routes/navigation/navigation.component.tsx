import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../asset/crown.svg";
import "./navigation.style.scss";

export const Navigation: React.FC = props => {

    return(
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}