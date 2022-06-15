import { ADD_TODO } from "../actiontypes/actiontypes"
import { EDIT_TODO } from "../actiontypes/actiontypes"
import { REMOVE_TODO } from "../actiontypes/actiontypes"

export const addTodo = (id: number, text: string) => {
    return {
        type: ADD_TODO,
        payload: {
            id,
            text
        }
    }
}

export const editTodo = (id: number, text: string) => {
    return {
        type: EDIT_TODO,
        payload: {
            id,
            text
        }
    }
}

export const removeTodo = (id: number) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}