import React from "react";
import Return from "../../../components/return/return.js";

class Rule extends React.Component {
    state = {
        prevPage: './member'
    }
    render() {
        return (
            <div>
                <Return page={this.state.prevPage}/>
                <div style={{ paddingLeft: 15, paddingRight: 15}}>
                <h2>奥美乐销售返利办法</h2>
                <p>所有用户均可注册会员，注册会员根据星级不同在进货时享有不同的积分，每个月末、季度末、年末会收到与累计积分相对应返利、返赠等相关奖励。</p>
                <p> 普通注册用户的积分倍数为1倍， 2 星注册用户的积分倍数为2倍， 以此类推。每介绍一个新用户使用， 该用户提货时提供介绍人的会员员号， 给予双方每人积分增加0 .1 倍。</p>
                <p>例如：11号新会员提货时提供01号会员编号，则11号新会员的积分是1.1倍，01号老会员的积分也增加0.1倍；如果11号新会员提货2吨，则11号新会员积分2.2分。否则积分2分。</p>
                <p>如果有10名新会员提货时都提供01号会员编号，则01号会员的积分倍数就增加到1+10*0.1=2倍，01号会员再进货2吨时，他的积分就是2*2=4分。
                    客户一次性购货达三吨，积分倍数增加0.1倍，客户累计进货达到10吨，积分倍数增加0.5倍。
                </p>
                <p>一个自然年度内，客户的积分倍数最高为10倍。 </p>
            </div>
            </div>
            
        )
    }
}

export default Rule;