import React from "react";
import { List, InputItem, TextareaItem, ImagePicker, Button, WhiteSpace, Toast } from "antd-mobile";
import { createForm } from 'rc-form';
import Return from "../../../components/return/return.js";
import axios from "axios";
import copy from 'copy-to-clipboard';

const data = [];

class Beuser extends React.Component {
    constructor() {
        super();
        this.state = {
            prevPage: './user',
            value: 0,
            message: '',
            url: ''
        }
    }
    componentDidMount() {
        axios.get('/api/store/isApply').then(mes => {
            const data = mes.data.value;
            const message = mes.data.message;
            const url = mes.data.url;
            this.setState({
                value: data,
                message: message || '',
                url: url || ''
            });
        });
    }
    msg(value,message) {
        this.setState({
            value,
            message
        })
    }
    copy = () => {
        copy(this.state.url);
        Toast.info('复制成功', 1);
    }

    render() {
        const value = Number(this.state.value);
        const url = this.state.url;
        
        const message = this.state.message;
        let data;
        const styles = {
            marginTop: 40,
            color: 'red',
            textAlign: 'center'
        }
        if(value === 0) {
            data = <BecomeUser getFieldProps={this.props.form} message={message} value={(value,message) => this.msg(value,message)}/>;
        } else if(value === 1) {
            data = <h2 style={styles}>{message}</h2>;
        } else if(value === 2) {
            data = <div style={{ textAlign: 'center'}}>
                <h2 style={styles}>{message}</h2>
                <p>网址为{url}</p>
                 <Button type="primary" inline style={{ marginTop: 35}} onClick={this.copy}>复制链接</Button>
            </div>
        }
        return(
            <div>
                <Return page={this.state.prevPage} />
                {
                    data
                }
            </div>
        );
    }
}

class BecomeUser extends React.Component {
    constructor() {
        super();
        this.state = {
            files: data,
            multiple: false,
        }
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    sign = () => {
        this.props.getFieldProps.validateFields((error, value) => {
            if(!value.shopname) {
                Toast.info('未填写商店名', 1);
                return;
            } else if(!value.intro) {
                Toast.info('未填写商店简介', 1);
                return;
            } else if (!this.state.files[0]) {
                Toast.info('未选择图片', 1);
                return;
            }
            value.image = this.state.files[0];
            axios.post('/api/store/prestore', {payment: value}).then(mes => {
                const value = mes.data.value;
                const message = mes.data.message;
                this.props.value(value, message);
            });
            
        });
    }
    render() {
        const { getFieldProps } = this.props.getFieldProps;
        const { files } = this.state;
        const styles = {
            color: 'red',
            textAlign: 'center'
        };
        // console.log(this.context.value);
        
        return(
            <div>
                <p style={styles}>{this.props.message}</p>
                <List renderHeader={() => '申请成为商家'}>
                    <InputItem
                    {...getFieldProps('shopname')}
                    clear
                    placeholder="请输入商店名..."
                    ref={el => this.autoFocusInst = el}
                    >商店名</InputItem>
                     <TextareaItem
                        {...getFieldProps('intro')}
                        title="商店简介"
                        rows={8}
                        placeholder="请输入商店简介..."
                    />
                      <InputItem
                        value=""
                        editable={false}
                    >商店图</InputItem>
                    <ImagePicker
                        {...getFieldProps('image')}
                        files={files}
                        onChange={this.onChange}
                        selectable={files.length < 1}
                    />
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.sign}>点击申请</Button>
            </div>
        )
    }
}

export default createForm()(Beuser);