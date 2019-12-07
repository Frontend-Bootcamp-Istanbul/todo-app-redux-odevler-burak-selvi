import React from 'react';
import { connect } from "react-redux";
import { removeTodos } from "./actionCreators/actionCreaters";
import { RemoveAllButton } from './customStyledComponents/StyledComponents';

class RemoveAll extends React.Component {
    render() {
        return (
            <>
                <RemoveAllButton onClick={() => {
                    this.props.removeTodos();
                }}>
                    Tümünü Sil
                </RemoveAllButton>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeTodos: () => { dispatch(removeTodos()) }
});

export default connect(null, mapDispatchToProps)(RemoveAll);
