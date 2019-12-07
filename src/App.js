import React, { Component } from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";
import "./App.css";
import Filters from "./Filters";
import { connect } from "react-redux";
import { setTodos } from "./actionCreators/actionCreaters";
import { TodoContainer, H3Container, TodoListContainer } from './customStyledComponents/StyledComponents';
import Notification from './Notification';



class App extends Component {
    componentDidMount() {
        // Component oluştuktan sonra gerekli olan datayı localstoragedan geyiriyoruz.
        let localTodos = window.localStorage.getItem("todos");
        if (localTodos) {
            localTodos = JSON.parse(localTodos);
        }
        this.props.addTodos(localTodos || []);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.todos) !== JSON.stringify(this.props.todos)) {
            window.localStorage.setItem("todos", JSON.stringify(this.props.todos))
        }
    }


    filterTodos = (todos, filterType) => {
        if (filterType === "all") {
            return todos;
        } else if (filterType === "completed") {
            return todos.filter((todo) => todo.checked);
        } else {
            return todos.filter((todo) => !todo.checked);
        }
    }

    render() {
        return (
            <TodoContainer>
                {this.props.showing && <Notification message={this.props.text} />}
                <TodoListContainer>
                    <H3Container>Todo Ekle / Sil</H3Container>
                    <div>
                        <AddTodo />
                        <RemoveAll />
                        <Filters />
                    </div>
                </TodoListContainer>
                <TodoList
                    todos={this.filterTodos(this.props.todos, this.props.activeFilter)} />
            </TodoContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    activeFilter: state.todosReducer.activeFilter,
    todos: state.todosReducer.todos,
    text: state.notificationReducer.notifyText,
    showing: state.notificationReducer.showing
});

const mapDispatchToProps = dispatch => ({
    addTodos: (todos) => { dispatch(setTodos(todos)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
