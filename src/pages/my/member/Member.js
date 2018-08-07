import React from 'react';
import { NavBar, Icon, WingBlank, Button, Toast } from 'antd-mobile';
import { Link } from 'dva/router';
import styles from "./Member.scss";
import axios from 'axios';
import copy from 'copy-to-clipboard';

class Member extends React.Component {
    constructor() {
        super();
        this.state = {
            value: false,
            inputValue: '',
            multiple: 0,
            invitKey: ''
        }
    }

    componentDidMount() {
        axios.get('/api/super').then((message) => {
            this.setState({
                value: message.data.value,
                multiple: message.data.multiple,
                invitKey: message.data.invitKey
            })
        })
    }

    input = (e) => {
        this.setState({
            inputValue: e.target.value
        })     
    }

    copy = () => {
        copy(this.state.invitKey);
        Toast.info('复制成功', 1);
    }

    submit = () => {
        axios.post('/api/point/checkin', { payment: this.state.inputValue}).then((message) => {
             const value = message.data.value;
             if (Number(value) === 0) {
                 Toast.info("验证码错误！", 1);
                 return;
             }
            this.setState({
                value: message.data.value,
                multiple: message.data.multiple,
                invitKey: message.data.invitKey
            });
        })
    }

    render(){

        const value = this.state.value;
        let content = '';
        if(value) {
            content = <div className={styles.main}>
                        <p>你目前的积分倍数：{this.state.multiple}</p>
                        <p>分享以下邀请码给好友赚取积分</p>
                        <p> 会员号邀请： </p>
                        <p>{this.state.invitKey}</p>
                        <Button type="primary" inline className={styles.button} onClick={this.copy}>复制</Button>
                    </div>
        } else {
            content = <div className={styles.main}>
                        <p>点击下列按钮成为会员</p>
                        <p> 注册码(可不填)： </p>
                        <p><input type="text" onChange={this.input}/></p>
                        <Button type="primary" inline className={styles.button} onClick={this.submit} activeClassName="am-button-primary">注册</Button>
                    </div>
        }
        
        return(
            <div>
                <NavBar className={styles.nav} 
                leftContent={<Link to="./user" style={{ marginLeft: -15, marginTop: 4}}><Icon type="left" style={{ color: '#fff', width: 40, height: 40}}/></Link>} 
                    rightContent={<Link to="./rule" style={{color: '#fff' }}>积分规则</Link>}>
                </NavBar>
             
                <WingBlank>
                    <div className={styles.title}>邀请好友，赚取积分</div>
                </WingBlank>

                { content }

            </div>
        )
    }
}

export default Member;