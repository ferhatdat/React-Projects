import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_TODO_LIST } from "../types/todoTypes";
const initialState = {
    counter: 0,
    list: [{id:0, text:'Add Todo', completed:false}]

}
const todoReducer = (state=initialState, action)=> {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                counter: state.counter + 1,
                list: [...state.list, {id: state.counter + 1, text: action.payload, completed: false}]
            }
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                list: state.list.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)
            }
        case CLEAR_TODO_LIST:
            return initialState
    
        default:
            return state
    }
}

export default todoReducer;