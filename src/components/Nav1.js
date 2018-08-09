import React from 'react';
import food from 'assets/food.png';
import food2 from 'assets/food2.png';
import food3 from 'assets/food3.png';
import { Grid, WingBlank, WhiteSpace } from 'antd-mobile';

const data = [
    {
        icon: food,
        text: '饲料',
        url: 'feed'
    },
    {
        icon: food2,
        text: '动保',
        url: 'dongbao'
    },
    {
        icon: food3,
        text: '供求信息',
        url: 'supply'
    },
];


export default class Nav1 extends React.Component {
    changepage = (url) => { 
        window.location.href += url;
    }

    render(){
        return(
            <WingBlank>
                <WhiteSpace size="md" />
                <Grid data={data} columnNum={3} onClick={_el => this.changepage(_el.url)}/>
            </WingBlank>
        )
    }
}