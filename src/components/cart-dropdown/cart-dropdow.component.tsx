import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItemModel } from "../../Model/cart-item.model";
import { MButton } from "../button/button.component"
import { CartItem } from "../cart-item/cart-item.component";
import './cart-dropdown.style.scss';
import { useNavigate } from "react-router-dom";

export const CartDropdown: React.FC = props => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map(
                        (cartItem: CartItemModel) => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        )
                    )
                }
            </div>
            <MButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</MButton>
        </div>
    )
}