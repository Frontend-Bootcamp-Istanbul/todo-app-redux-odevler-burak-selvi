import { SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_TODOS, TOGGLE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../actions/actions";

export function setFilter(newFilter) {
    return { type: SET_FILTER, activeFilter: newFilter }
}

export function setTodos(todos) {
    return { type: SET_TODOS, todos }
}

export function addTodo(todo) {
    return (dispatch) => {
        if (todo.content) {
            dispatch({ type: ADD_TODO, todo });
            dispatch(showNotify(`${todo.content} eklendi`));
        } else {
            dispatch(showNotify('Boş bırakılamaz !!!'));
        }
    }
}

export function removeTodo(id) {
    return (dispatch) => {
        dispatch({ type: REMOVE_TODO, id });
        dispatch(showNotify('silindi'));
    }
}

export function removeTodos() {
    return (dispatch) => {
        dispatch({ type: REMOVE_TODOS });
        dispatch(showNotify('Hepsi Silindi'));
    }
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function showNotify(text) {
    return (dispatch) => {
        dispatch({ type: SHOW_NOTIFICATION, text });
        setTimeout(() => {
            dispatch(hideNotify());
        }, 2000);
    }
}

export function hideNotify() {
    return { type: HIDE_NOTIFICATION }
}