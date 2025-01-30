import TaskComponent from './Task.js';
import AddTask from './AddTaskForm.js';
import { useAppSelector } from '../../app/store.ts';


const TaskBox: React.FC = () => {
  const { data, fetchTasksStatus } = useAppSelector((state) => state.tasks)

  if (fetchTasksStatus === 'pending') return <div>Loading...</div>
  
  if (fetchTasksStatus === 'error') return <div>Error</div>
    
  // const filteredTasks = filterCategory === 'All'
  //   ? tasks
  //   : filterCategory === 'no category'
  //   ? tasks.filter(task => task.category === '')
  //   : tasks.filter(task => task.category === filterCategory);
    
  return (
    <div className="taskBox">
      <h1 className="categoryTitle">{'All'} tasks</h1>
      <AddTask />
      {data.map((task, index) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskBox;
