import { FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, deleteCategory } from '../comingSoon/categoriesSlice.ts';
import { setFilterCategory } from '../comingSoon/filtersSlice.ts';
import { AppState, useAppSelector } from '../app/store.ts';

//type SidebarProps = Omit<AppProps, 'filterByCategory' | 'selectedCategory'>;

const Sidebar: FC = ({}) => {
  // const [newCategory, setNewCategory] = useState('');
  // const dispatch = useDispatch();
  // const categories = useAppSelector((state) => state.categories);
  // const tasks = useAppSelector((state) => state.tasks)
  
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dispatch(addCategory(newCategory));
  //   setNewCategory("");
  // }
  
  // const handleDeleteClick = (category: string, index: number) => {
  //   if (tasks.some((task) => task.category === category)) {
  //     if (confirm('You have unfulfilled tasks in this category which will be deleted, are you sure?')) {
  //       dispatch(deleteCategory(index));
  //       dispatch(deleteTaskByCategory(category));
  //       dispatch(setFilterCategory('All'));
  //     }
  //   } else {
  //     dispatch(deleteCategory(index));
  //     dispatch(setFilterCategory('All'));
  //   }
  // };
  
  return (
    <div className="Sidebar">
      {/* <form onSubmit={handleSubmit} className="addCategoryForm">
        <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} type="text" className="addCategoryInput" placeholder="Add new category" required />
        <button type="submit" className="submitBtn">Add category</button>
      </form>
      <button onClick={() => dispatch(setFilterCategory('All'))} className='allCategoriesBtn'>
          All categories
      </button>
      <button onClick={() => dispatch(setFilterCategory('no category'))} className='allCategoriesBtn'>
          Without category
      </button>
      {categories.map((category, index) => (
        <div className="category" key={index}>
        <button className='categoryBtn' onClick={() => dispatch(setFilterCategory(category))}>
          {category}
        </button>
        <img className='deleteCategoryBtn' src="src/assets/trashcan.png" alt="Delete" width="20" height="20" onClick={() => handleDeleteClick(category, index)}></img>
        </div>
      ))} */}
    </div>
  )
}

export default Sidebar;