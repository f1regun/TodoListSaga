import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskPending } from './tasksSlice.ts';
import { useAppSelector } from '../../app/store.ts';
import { v4 as uuidv4 } from 'uuid';


const AddTask: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useAppSelector((state) => state.tasks.data);
  // const categories = useAppSelector((state) => state.categories);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const filterCategory = useAppSelector((state) => state.filters.filterCategory)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();   
    if (tasks.some(
      (task) => task.title === newTask
    )) {
      alert('You already have this task');
    } else {
      dispatch(addTaskPending({
        userId: 1,
        id: uuidv4(),
        title: newTask,
        completed: false,
      }))
    }
    setNewTask("");
  }

  // const selectOptions = (filterCategory: string, categories: string[]) => {
  //   if (filterCategory === 'All') {
  //     return (
  //     <>
  //       <option value="">no category</option>
  //       {categories.map((category, index) => (
  //         <option key={index} value={category}>
  //           {category}
  //         </option>
  //       ))}
  //     </>
  //     );
  //   } else if (filterCategory === 'no category') {
  //     return <option value="">no category</option>;
  //   } else {
  //     return <option value={filterCategory}>{filterCategory}</option>;
  //   }
  // }

  // if (categories.indexOf(selectedCategory) === -1 && selectedCategory !== '' && selectedCategory !== 'All') {
  //   setSelectedCategory('')
  // }

  return (
    <form onSubmit={handleSubmit} className="addTaskForm">
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" className="addTaskInput" placeholder="Add new task" required/>
      {/* <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="addTaskSelect">
        {selectOptions(filterCategory, categories)}   
      </select> */}
      <button type="submit" className="submitBtn">Add task</button>
    </form>
  );
}
  
export default AddTask;