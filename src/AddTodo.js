import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "./actionCreators/actionCreaters";
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
    }

    onTodoAdd(newTodo) {
        this.props.addTodo({
            content: newTodo,
            id: Math.random(),
            checked: false
        });
    }

    render() {
        return (
            <div>
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

});

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => { dispatch(addTodo(todo)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
