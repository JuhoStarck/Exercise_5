import { useReducer } from "react";
import { Todo } from "../types/Todo";

type TodoState = {
  todos: Todo[]
}

type TodoAction = 
  | { type: "ADD", payload: string }
  | { type: "TOGGLE", payload: string }
  | { type: "REMOVE", payload: string }

const initialState: TodoState = { 
  todos: [] 
}

const todoReducer = (state: TodoState, action: TodoAction):
  TodoState => {
    switch(action.type) {
      case 'ADD':
        return { todos: [
            ...state.todos,
            { id: Date.now().toString(), name: action.payload, done: false }
          ]
        }
      case 'TOGGLE':
        return { todos: state.todos.map(todo => 
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
          )
        }
      case 'REMOVE':
        return { todos: state.todos.filter(todo =>
            todo.id !== action.payload
          )
        }
      default:
        return state
    }
  }

export const useTodos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (name: string) => 
    dispatch({ type: 'ADD', payload: name })

  const toggleTodo = (id: string) => 
    dispatch({ type: 'TOGGLE', payload: id })

  const removeTodo = (id: string) =>
    dispatch ({ type: 'REMOVE', payload: id })

  return {
    state,
    addTodo,
    toggleTodo,
    removeTodo
  }
}