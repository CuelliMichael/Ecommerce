import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

export const CartIcon: React.FC = props => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggle = () => setIsCartOpen(!isCartOpen);

    return (
        <div
            className='cart-icon-container'
            onClick={toggle}
        >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}