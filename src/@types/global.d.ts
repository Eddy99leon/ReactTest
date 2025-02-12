export interface TodoType {
    id: number;
    title: string;
    completed: boolean;
}
  
export interface TodoState {
    todos: TodoType[];
}

export interface TodoItemProps {
    todo: TodoType;
}