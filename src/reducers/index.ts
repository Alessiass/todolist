import { Reducer } from "redux";
import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actiontypes/actiontypes";
import { TaskState, Task, ActionTask } from "../interfaces/interfaces";

const initialState = {
    tasks:[]
};

export const rootReducer :Reducer<TaskState, ActionTask> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                tasks: [...state.tasks, action.payload]
            }
        }
        case EDIT_TODO:
            {
                return {

                }
            }
        case REMOVE_TODO:
            {
                return {

                }
            }
        default: {
            return state;
        }
    }
}