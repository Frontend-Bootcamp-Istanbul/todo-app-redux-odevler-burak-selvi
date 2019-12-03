import React from 'react';
import { connect } from 'react-redux';
import { addTodo, showNotify, hideNotify } from "./actionCreators/actionCreaters";
import Notification from './Notification';
import { Input, Button } from './customStyledComponents/StyledComponents';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.onTodoAdd = this.onTodoAdd.bind(this);
    }

    changeInput(e) {
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.onTodoAdd(this.state.inputVal);
        this.setState({
            inputVal: ""
        });
        this.showNotify();
        setTimeout(() => {
            this.hideNotify();
        }, 1000);
    }

    onTodoAdd(newTodo) {
        this.props.addTodo({
            content: newTodo,
            id: Math.random(),
            checked: false
        });
    }

    showNotify() {
        this.props.showNotify('add');
    }

    hideNotify() {
        this.props.hideNotify();
    }

    render() {
        const show = this.props.showing && (this.props.type === 'add')
        return (
            <div>
                {show && <Notification message="todo eklendi" />}
                <form
                    onSubmit={this.addTodo}>
                    <Input
                        value={this.state.inputVal}
                        onChange={this.changeInput} />
                    <Button>Ekle</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showing: state.showing,
    type: state.notifyType
});

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => { dispatch(addTodo(todo)) },
    showNotify: (notifyType) => { dispatch(showNotify(notifyType)) },
    hideNotify: () => { dispatch(hideNotify()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
