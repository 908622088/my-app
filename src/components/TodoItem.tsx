import { Todo } from "@/types"
interface TodoItemProps {
    todo: Todo,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}
function TodoItem ({todo, toggleTodo, deleteTodo}:TodoItemProps) {
    return (
        <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 border-b">
            <span className={`mb-2 sm:mb-0 break-words w-full sm:w-auto ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.text}
            </span>
            <div className="flex gap-2 mt-1 sm:mt-0">
                <button 
                    onClick={() => toggleTodo(todo.id)}
                    className="px-2 sm:px-3 py-1 text-sm sm:text-base bg-[#333333] text-white rounded hover:bg-gray-600"
                >
                    切换
                </button>
                <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2 sm:px-3 py-1 text-sm sm:text-base bg-red-700 text-white rounded hover:bg-red-600"
                >
                    删除
                </button>
            </div>
        </li>
    )
}
export default TodoItem