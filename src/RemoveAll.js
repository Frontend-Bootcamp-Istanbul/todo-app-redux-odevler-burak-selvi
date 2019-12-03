import React from 'react';
import { connect } from "react-redux";
import { removeTodos, showNotify, hideNotify } from "./actionCreators/actionCreaters";
import Notification from './Notification';

class RemoveAll extends React.Component {
    handleNotify = () => {
        this.showNotify();
        setTimeout(() => {
            this.hideNotify();
        }, 1000);
    }

    showNotify = () => {
        this.props.showNotify('removeAll');
    }

    hideNotify = () => {
        this.props.hideNotify();
    }
    render() {
        const { showing, type } = this.props;
        const show = showing && (type === 'removeAll');
        return (
            <>
                {show && <Notification message="tüm todolar silindi" />}
                <button className="remove-all" onClick={() => {
                    this.props.removeTodos();
                    this.handleNotify();
                }}>
                    Tümünü Sil
                </button>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    showing: state.showing,
    type: state.notifyType
});

const mapDispatchToProps = dispatch => ({
    removeTodos: () => { dispatch(removeTodos()) },
    showNotify: (notifyType) => { dispatch(showNotify(notifyType)) },
    hideNotify: () => { dispatch(hideNotify()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAll);
