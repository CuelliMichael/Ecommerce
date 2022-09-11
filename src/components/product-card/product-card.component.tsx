import { ShopModel } from '../../Model/ShopModel';
import { MButton } from '../button/button.component';
import './product-card.style.scss';

interface ProductCardProps {
    product: ShopModel
}

export const ProductCard : React.FC<ProductCardProps> = ({product:{name, imageUrl, price}}) => {

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
            <MButton button_style='inverted' >Add to cart </MButton>
        </div>
    )
}