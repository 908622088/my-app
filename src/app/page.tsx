"use client"
import AddTodo from "@/components/AddTodo"
import TodoFilter from "@/components/TodoFilter"
import TodoList from "@/components/TodoList"
import { Todo } from "@/types"
import { useState } from "react"
export default function Home() {
  const [todos,setTodos] = useState<Todo[]>([])
  const [filter,setFilter] = useState("all")
  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo

    }))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter(todo => !todo.completed)
      case "completed":
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }
  return (
    <div className="w-full p-4 sm:px-6 md:max-w-2xl md:mx-auto py-4">
      <h1 className="text-xl sm:text-xl font-bold mb-4 text-center">TodoList<span className="md:hidden ml-2">移动端</span></h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} ></TodoList>
      <TodoFilter setFilter={setFilter}></TodoFilter>
      
    </div>
    
  )
}
