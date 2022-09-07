import { CategoriesItems } from "../../components/categories/categories-items-component";
import { CategoryModel } from "../../Model/CategoryModel";

export const Home = () => {

  const categories = [
    new CategoryModel(1, 'hats', 'https://i.ibb.co/cvpntL1/hats.png'),
    new CategoryModel(2, 'jackets', 'https://i.ibb.co/px2tCc3/jackets.png'),
    new CategoryModel(3, 'sneakers', 'https://i.ibb.co/0jqHpnp/sneakers.png'),
    new CategoryModel(4, 'womens', 'https://i.ibb.co/GCCdy8t/womens.png'),
    new CategoryModel(5, 'mens', 'https://i.ibb.co/R70vBrQ/men.png'),
  ]

  return (
    <CategoriesItems 
      categories={categories}
    />
  );
}
