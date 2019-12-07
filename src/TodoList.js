import React from 'react';
import Todo from './Todo';
import { H3Container, TodoListContainer } from './customStyledComponents/StyledComponents';

class TodoList extends React.Component {
    render() {
        return (
            <TodoListContainer todolist>
                <H3Container>TodoList <span>{this.props.todos.length}</span>
                </H3Container>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                        />
                    })
                }
            </TodoListContainer>
        );
    }
}

export default TodoList;
