import React, { Component } from 'react';
import User from './User';
import UserInfo from './UserInfo';
import SignOthers from './SignOthers';
import Merchanat from './Merchant';

class Account extends Component {
    render() {    
        return(
            <div>
                <User />
                <UserInfo />
                <SignOthers />
                <Merchanat />
            </div>
        );
    }
}

export default Account;