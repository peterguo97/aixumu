import React from "react";
import Return from 'components/return/return';
import axios from 'axios';
import { List } from 'antd-mobile';
import { Link } from "dva/router";
import { connect } from 'dva';
import { routerRedux } from "dva/router";

const Item = List.Item;
const Brief = Item.Brief;

class Supply extends React.Component {
    constructor() {
        super();
        this.state = {
            page: ''
        }
    }
 
    render() {
        const page = this.state.page;
        return (
            <div>
                <Return page={page} />
                <ListAll supply={this.props}/>
            </div>
        )
    }
}

class ListAll extends React.Component {
    constructor() {
        super();
        this.state = {
            message: []
        }
    }

    componentDidMount() {
        axios.get('/api/get/supply').then(mes => {
            const message = mes.data;
            this.setState({
                message
            })
        });
    }

    changPage = (list) => {
        this.props.supply.dispatch({type: 'supply/change', payload: list});
        this.props.supply.dispatch(routerRedux.push('/message'));
    }
    render() {
        const message = this.state.message;
        console.log(message);
        
        return(
            <List renderHeader={() => '供求信息'} className="my-list">
                {  
                    message.map(list =>
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => { }}
                            platform={list.title}
                            key={list.id}
                            onClick={_el => this.changPage(list)}
                        >
                            {list.title}
                            <Brief>{list.message}</Brief>
                        </Item>
                    )
                }
            </List>
        );
    }
}

function mapStateToProps(state) {
    return { supply: state.supply };
}

const SupplyState = connect(mapStateToProps)(Supply);
export default SupplyState;
