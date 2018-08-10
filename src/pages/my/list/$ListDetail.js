import React, { Component } from "react";
import { List, Flex, Toast } from "antd-mobile";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import yay from "assets/yay.jpg";
import styles from "./ListDetail.scss";

const Item = List.Item;
class ListDetail extends Component {
    submit = () => {
        const { value, id } = this.props.listdetail;
        if(value === 0) {
            this.props.dispatch(routerRedux.push(`/order/${id}`));
        } else if(value === 2) {
            this.props.dispatch({type: 'listdetail/goods', payload: {id}});
        } else if(value === 3) {
            this.props.dispatch(routerRedux.push(`/eval/${id}`));
        } else if(value === 4) {
            Toast.info('您已评价！', 1);
        } 
        
    }
    render() {
        const { name, phone, store, result, list, footer, btn } = this.props.listdetail;
        let price = 0.00;
        list.map(i => {
            price += i.num * i.price;
            return null;
        });
        
        return(
            <div className={styles.main}>
                <img src={yay} alt="交易成功" height="80" width="100%"/>
                <header className={styles.header}>
                    <p>收货人：{name}</p>
                    <p>电话号码：{phone}</p>
                </header>
                <List className={styles.list}>
                    <Flex className={styles.listheader}>
                        <Flex.Item>{store}</Flex.Item>
                        <Flex.Item className={styles.textalign}>{result}</Flex.Item>
                    </Flex>
                
                    { 
                        list.map( (list, index) => 
                        <Item thumb={list.img} multipleLine="true" className={styles.item} key={index}>
                            <Flex>
                                <Flex.Item>
                                    <div>{list.title}</div>
                                    <div>{list.sub}</div>
                                </Flex.Item>
                                <Flex.Item className={styles.flexitem}>
                                    <div>￥{list.price}</div>
                                    <div>×{list.num}</div>
                                </Flex.Item>
                            </Flex>
                        </Item>)
                    }
                    <Flex className={styles.listheader}>
                        <Flex.Item className={styles.textalign}>合计: ￥{price}</Flex.Item>
                    </Flex>
                    <div className={styles.refund}>
                        {/* <span onClick={this.refund}>申请退款</span> */}
                        <span onClick={this.submit}>{btn}</span>
                    </div>
                </List>
                <footer className={styles.footer}>
                    <span>
                        订单编号：{footer.num1}
                    </span>
                    <span>
                        创建时间： { footer.time }
                    </span>
                    <span>
                        成交时间： {footer.finished_at}
                    </span>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { listdetail: state.listdetail };
}

const ListDetailState = connect(mapStateToProps)(ListDetail);
export default ListDetailState;