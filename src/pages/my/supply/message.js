import React from "react";
import { connect } from "dva";
import Return from 'components/return/return';

class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            mes: '',
            page: 'supply'
        }
    }
    render() {
        const page = this.state.page;
        const { title, message } = this.props.supply;
        // console.log(this.props.supply);

        return (
            <div>
                <Return page={page} />
                <h2 style={{paddingLeft: 15}}>{title}</h2>
                <p style={{padding: '0 15px'}}>{message}</p>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { supply: state.supply };
}

const MessageState = connect(mapStateToProps)(Message);
export default MessageState;
