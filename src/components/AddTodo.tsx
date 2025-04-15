import { useState } from "react"
interface AddTodoProps {
    addTodo: (text:string) => void
}
function AddTodo ({addTodo}:AddTodoProps) {

    const [text,setText] = useState<string>("")
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { // 阻止默认行为
        e.preventDefault()
        // 检查输入是否为空
        if(text.trim() === "") {
            return
        }
        addTodo(text) 
        setText("")

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
            <input 
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="flex-1 px-4 py-2 border rounded"
                placeholder="添加新的待办事项"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 sm:whitespace-nowrap">新建事项</button>
        </form>
    )
}
export default AddTodo