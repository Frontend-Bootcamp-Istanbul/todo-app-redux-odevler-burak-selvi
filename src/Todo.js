import React, { Component } from 'react'
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "./actionCreators/actionCreaters";

class Todo extends Component {
    render() {
        const { content, id, checked, handleNotify } = this.props;
        let itemClass = "todo-item";
        if (checked) {
            itemClass += " checked";
        }
        return (
            <div className={itemClass} onClick={() => { this.props.toggleTodo(id) }}>
                {content}
                <span
                    className="remove-todo"
                    onClick={(e) => {
                        e.stopPropagation();
                        this.props.removeTodo(id);
                        handleNotify();
                    }}>X</span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => { dispatch(removeTodo(id)) },
    toggleTodo: (id) => { dispatch(toggleTodo(id)) }
});

export default connect(null, mapDispatchToProps)(Todo);
