import { useDispatch } from 'react-redux';
import { deleteTaskPending, Task, toggleTaskPending } from './tasksSlice';


type TaskProps = {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
   
  const handleTaskDelete = () => {
    dispatch(deleteTaskPending(task.id));
  }
  
  const handleCheckboxChange = () => {
    dispatch(toggleTaskPending(
      {
        userId: task.userId,
        id: task.id,
        title: task.title,
        completed: !task.completed,
      }
    ))
  };

  return (
    <div className={task.completed ? 'completedTask' : 'task'}>
      <input className='checkbox' type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />
      <p className="taskText">{task.title}</p>
      <p className="taskCategory"></p>
      <img className="deleteBtn" src="src/assets/trashcan.png" alt="Delete" width="40" height="40" onClick={handleTaskDelete}></img>
    </div>
  );
}

export default TaskComponent;