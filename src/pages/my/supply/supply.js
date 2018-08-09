import React from "react";
import Return from 'components/return/return';
import axios from 'axios';
import { List } from 'antd-mobile';
import { Link } from "dva/router";
import { connect } from 'dva';

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
                <ListAll />
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

    render() {
        const message = this.state.message;
        console.log(message);
        
        return(
            <List renderHeader={() => '供求信息'} className="my-list">
                {  
                    message.map(list =>
                        <Link 
                            to='message'
                            key={list.id}
                        >
                            <Item
                                arrow="horizontal"
                                multipleLine
                                onClick={() => { }}
                                platform={list.name}
                            >
                                {list.name}
                                <Brief>{list.message}</Brief>
                            </Item>
                        </Link>
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
