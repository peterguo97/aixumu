import React from 'react';
import style from './shopUser.scss';
import { connect } from 'dva';
import axios from 'axios';

class GoodsDetail extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           message: {name: '',abstract: ''}
       }
   }

    componentDidMount() {
        const href = window.location.href;
        const num1 = href.search('/detail');
        const location = href.substring(0, num1);
        const num2 = location.lastIndexOf('/');
        const paymentid = location.substring(num2+1);
        
        axios.post('/api/goods/detail/-1',{payment: paymentid}).then((mes)=>{            
            let data = mes.data;
            this.setState({
                message: data
            })
        })
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        // console.log(nextProps);
        this.setState({
            message: nextProps.goodsdata
        })
    }
    
    render(){
        const message = this.state.message;
        let imgItems = '';
        if(message.imgs) {
            imgItems = message.imgs.map(img => 
                <img src={img.img} alt={img.img} key={img.img} width="30%" height="90"/>
            )
        };
        const bol = Boolean(message.name);
        return(
            <div className={style.shopbox}>
                <h3 className={style.title}>{bol&&'商品名称：'}{message.name}</h3>
                <p>{bol&&'商品介绍：'}{message.abstract}</p>
                <p>{bol&&'商品价格：'} {message.price}</p>
                <div className={style.img}>
                    <p>{bol&&'图片展示：'}</p>
                    {
                        imgItems
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({detail}) {
    console.log(detail);
    
    return {
        goodsdata: detail.goodsdata,
    };
}

export default connect(mapStateToProps)(GoodsDetail);