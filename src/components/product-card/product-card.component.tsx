import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ShopModel } from '../../Model/ShopModel';
import { MButton } from '../button/button.component';
import './product-card.style.scss';

interface ProductCardProps {
    product: ShopModel
}

export const ProductCard : React.FC<ProductCardProps> = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    {price}
                </span>
            </div>
            <MButton button_style='inverted' onClick={addProductToCart} >Add to cart </MButton>
        </div>
    )
}