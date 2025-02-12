import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { deleteTodo, toggleTodo } from '../redux/todoSlice';
import { TodoItemProps } from '@/@types/global';


const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const dispatch = useDispatch<AppDispatch>();
 
  return (
    <div className={`p-2 flex justify-between items-center border-b ${todo?.completed ? 'bg-green-100' : ''}`}>
        <span
            className={`cursor-pointer ${todo?.completed ? 'line-through text-gray-500' : ''}`}
            onClick={() => dispatch(toggleTodo(todo?.id))}
        >
            {todo?.title}
        </span>
        <button
            onClick={() => dispatch(deleteTodo(todo?.id))}
            className="bg-red-500 text-white p-1 rounded"
        >
            Supprimer
        </button>
    </div>
  )
}

export default TodoItem
