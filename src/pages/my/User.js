import React, { Component } from "react";
// import UserLogo  from "../../assets/yay.jpg";
import  styles from "./User.scss";
// import { Link } from "dva/router";
import axios from "axios";
// import { connect } from "dva";

class User extends Component {
    state = {
        img: '',
        name: ''
    }
    componentDidMount() {
        axios.post('/api/wechatUser').then(message=>{
            const img = message.data.img;
            const name = message.data.name;
            this.setState({
                img,
                name
            })
        })
    }
    render() {
        const { img, name} = this.state;
        return (
            <div className={styles.user}>
                {/* <img src={UserLogo} alt="头像"/> */}
                <img src={img} alt="头像" />

                <p className={styles.username}>{name}</p>         
            </div>
        );
    }
}

export default User;