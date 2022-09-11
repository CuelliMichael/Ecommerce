import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartItemModel } from "../../Model/cart-item.model";
import { MButton } from "../button/button.component"
import { CartItem } from "../cart-item/cart-item.component";
import './cart-dropdown.style.scss';

export const CartDropdown: React.FC = props => {

    const { cartItems } = useContext(CartContext);

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
            <MButton>GO TO CHECKOUT</MButton>
        </div>
    )
}