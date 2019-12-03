import React from 'react';
import { connect } from "react-redux";
import { removeTodos } from "./actionCreators/actionCreaters";


class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => { this.props.removeTodos() }}>
            Tümünü Sil
        </button>
    }
}

const mapDispatchToProps = dispatch => ({
    removeTodos: () => { dispatch(removeTodos()) },
});

export default connect(null, mapDispatchToProps)(RemoveAll);
