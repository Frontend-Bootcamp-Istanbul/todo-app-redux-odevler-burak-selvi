import React, { Component } from 'react'
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "./actionCreators/actionCreaters";
import { TodoItem, RemoveButton } from './customStyledComponents/StyledComponents';

class Todo extends Component {
    render() {
        const { content, id, checked, handleNotify } = this.props;
        let checkedClass = false;
        if (checked) {
            checkedClass = true;
        }
        return (
            <TodoItem checkedClass={checkedClass} onClick={() => { this.props.toggleTodo(id) }}>
                {content}
                <RemoveButton
                    onClick={(e) => {
                        e.stopPropagation();
                        this.props.removeTodo(id);
                        handleNotify();
                    }}>X</RemoveButton>
            </TodoItem>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => { dispatch(removeTodo(id)) },
    toggleTodo: (id) => { dispatch(toggleTodo(id)) }
});

export default connect(null, mapDispatchToProps)(Todo);
