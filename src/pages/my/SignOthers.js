import React, { Component } from 'react';
import { List } from "antd-mobile";
import { Link } from "dva/router";
import styles from "./UserInfo.scss";

const Item = List.Item;

class SignOthers extends Component {
    render() {     
        return (
            <List className={styles.mylist}>
                <Link to="./member">
                    <Item
                        arrow="horizontal"
                    >成为会员</Item>
                </Link>
                <Link to="./beuser">
                    <Item
                        arrow="horizontal"
                    >成为商家</Item>
                </Link>
            </List>
        );
    }
}

export default SignOthers;