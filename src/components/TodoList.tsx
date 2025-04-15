import { Todo } from "@/types";
import TodoItem from "./TodoItem";
interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}
function TodoList({todos, toggleTodo, deleteTodo}:TodoListProps) {
    return (
        <ul>
            {todos.map((todo) => (//遍历
                <TodoItem key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} todo={todo}></TodoItem>

            ))}
        </ul>

    )
}
export default TodoList