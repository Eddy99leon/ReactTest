import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTodo, completeAllTodos } from '../redux/todoSlice';
import { makeRequest } from '@/utils/axios';
import TodoItem from './TodoItem';
import { TodoType } from '@/@types/global';

const Todo: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos } = useSelector((state: RootState) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    makeRequest.get<TodoType[]>('/todos')
      .then((response) => {
        dispatch(addTodo(response.data));
      })
      .catch((error) => {
        console.error("Erreur API", error);
        setError("Une erreur est survenue lors de la récupération des tâches.");
      });
  }, [dispatch]);  

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    const newTodoItem: TodoType = {
      id: Date.now(),
      title: newTodo,
      completed: false
    };
    dispatch(addTodo(newTodoItem));
    setNewTodo('');
  };

  const handleCompleteAll = () => {
    dispatch(completeAllTodos());
  };
  

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">

      <h1 className="text-2xl font-bold text-center mb-4">
        Liste des Tâches
      </h1>

      <button
        onClick={handleCompleteAll}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Tout compléter
      </button>

      {error && (
        <div className="bg-red-100 text-red-500 p-2 mb-4 rounded">
          {error}
        </div>
      )}

      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Ajouter une tâche..."
          className="border p-2 flex-grow rounded"
        />
        <button 
          onClick={handleAddTodo} 
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Ajouter
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

    </div>
  );
};

export default Todo;