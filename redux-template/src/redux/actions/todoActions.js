import {ADD_TODO, DELETE_TODO, CLEAR_TODO_LIST, TOGGLE_TODO} from "../types/todoTypes"

export const addTodo = (payLoad) => {
    return {
        type: ADD_TODO,
        payload: payLoad
    }
}
export const delete_todo = (payLoad) => {
    return {
        type: DELETE_TODO,
        payload: payLoad
    }
}
export const clearTodoList = () => {
    return {
        type: CLEAR_TODO_LIST
    }
}
export const toggle_todo = (payLoad) => {
    return {
        type: TOGGLE_TODO,
        payload: payLoad
    }
}