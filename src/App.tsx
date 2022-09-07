import { CategoriesItems } from "./components/categories/categories-items-component";
import { CategoryModel } from "./Model/CategoryModel";

const App = () => {

  const categories = [
    new CategoryModel(1, 'Hats', 'https://i.ibb.co/cvpntL1/hats.png'),
    new CategoryModel(2, 'Jackets', 'https://i.ibb.co/px2tCc3/jackets.png'),
    new CategoryModel(3, 'Sneakers', 'https://i.ibb.co/0jqHpnp/sneakers.png'),
    new CategoryModel(4, 'Womens', 'https://i.ibb.co/GCCdy8t/womens.png'),
    new CategoryModel(5, 'Mens', 'https://i.ibb.co/R70vBrQ/men.png'),
  ]

  return (
    <CategoriesItems 
      categories={categories}
    />
  );
}

export default App;
