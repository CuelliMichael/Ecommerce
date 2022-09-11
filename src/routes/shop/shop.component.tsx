import { ShopModel } from '../../Model/ShopModel';
import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import { ProductCard } from '../../components/product-card/product-card.component';

import './shop.style.scss';

export const Shop: React.FC = props => {

    const { products } = useContext(ProductsContext);

    return (
        <div className='products-container'>
            {
                products.map(
                    (product: ShopModel) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    )
                )
            }
        </div>
    )
}