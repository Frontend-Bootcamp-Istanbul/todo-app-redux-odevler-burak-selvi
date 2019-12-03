import { SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_TODOS, TOGGLE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../actions/actions";

const rootReducer = function (state = {
    activeFilter: "all",
    todos: [],
    showing: false,
    notifyType: ''
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return { ...state, activeFilter: action.activeFilter }
        case SET_TODOS:
            return { ...state, todos: action.todos }
        case ADD_TODO:
            return { ...state, todos: state.todos.concat([action.todo]) }
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
        case REMOVE_TODOS:
            return { ...state, todos: [] }
        case TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (action.id === todo.id) {
                        let currentTodo = { ...todo };
                        currentTodo.checked = !currentTodo.checked;
                        return currentTodo;
                    } else {
                        return todo;
                    }
                })
            }
        case SHOW_NOTIFICATION:
            return { ...state, showing: true, notifyType: action.notifyType }
        case HIDE_NOTIFICATION:
            return { ...state, showing: false }
        default:
            return state;
    }

};

export default rootReducer;