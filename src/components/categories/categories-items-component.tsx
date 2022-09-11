import { CategoryModel } from '../../Model/CategoryModel';
import { CategoryItem } from '../category-item/category-item-component';
import './categories-items.style.scss';

interface CategoryItemsProps{
    categories: CategoryModel []
}

export const CategoriesItems: React.FC<CategoryItemsProps> = ({categories}:CategoryItemsProps) => {

    return (
        <div className="categories-container">
            {
                categories.map(
                    (category: CategoryModel) => (
                        <CategoryItem
                            key={category.id}
                            category={category}
                        />
                    )
                )
            }
        </div>
    );
}