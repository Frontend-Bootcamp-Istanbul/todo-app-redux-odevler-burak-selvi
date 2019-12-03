import React from 'react';
import Todo from './Todo';
import { connect } from "react-redux";
import { showNotify, hideNotify } from "./actionCreators/actionCreaters";
import Notification from './Notification';


class TodoList extends React.Component {
    handleNotify = () => {
        this.showNotify();
        setTimeout(() => {
            this.hideNotify();
        }, 1000);
    }

    showNotify = () => {
        this.props.showNotify('remove');
    }

    hideNotify = () => {
        this.props.hideNotify();
    }
    render() {
        const { showing, type } = this.props;
        const show = showing && (type === 'remove');
        return (
            <div className="todo-list">
                {show && <Notification message="todo silindi" />}
                <h3>TodoList <span>{this.props.todos.length}</span>
                </h3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            handleNotify={this.handleNotify}
                        />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showing: state.showing,
    type: state.notifyType
});


const mapDispatchToProps = dispatch => ({
    showNotify: (notifyType) => { dispatch(showNotify(notifyType)) },
    hideNotify: () => { dispatch(hideNotify()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
