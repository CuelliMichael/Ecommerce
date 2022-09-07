import { CategoryModel } from '../../Model/CategoryModel';
import './category-item.style.scss';

interface CategoryItemProps{
    category: CategoryModel
}

export const CategoryItem: React.FC<CategoryItemProps> = ({category: {imageUrl,title}}:CategoryItemProps) => {

    return (
        <div className="category-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="category-body-container">
                <h2>
                    {title}
                </h2>
                <p>
                    shop now
                </p>
            </div>
        </div>
    )
}