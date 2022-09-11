import { MButton } from "../button/button.component"
import './cart-dropdown.style.scss';

export const CartDropdown: React.FC = props => {

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <MButton>GO TO CHECKOUT</MButton>
        </div>
    )
}