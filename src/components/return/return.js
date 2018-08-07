import React, { Component } from 'react';
import { Icon } from "antd-mobile";
import { Link } from 'dva/router';

class Return extends Component {
    render() {
        const { page } = this.props;
        const oDiv = {
            backgroundColor: 'rgb(18,149,209)',
            height: 40,
            marginBottom: 10
        };
        const oIcon = {
            color: '#fff',
            width: 40,
            height: 40
        }
        return(
            <div style={oDiv}>
                <Link to={page}>
                    <Icon type="left" style={oIcon}/>
                </Link>
            </div>
        )
    }
}


export default Return;