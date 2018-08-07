import React from 'react';
import style from './detail.scss';
// import img_title from 'assets/logo.jpg';
import back from 'assets/back.png';
import { Link } from 'dva/router';
import DetailBar from './components/detail/DetailBar.js';
import ListFooter from './components/detail/footer';
import { connect } from 'dva';
import axios from "axios";

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: -500,
            showFooter: true,
            img: '',
            name: ''
        }
    }

    componentDidMount() {
        const href = window.location.href;
        const num1 = href.search('/detail');
        const location = href.substring(0, num1);
        const num2 = location.lastIndexOf('/');
        const paymentid = location.substring(num2 + 1);

        axios.get(`/api/store/main/${paymentid}`).then(message=> {
            const img = message.data.img;
            const name = message.data.name;
            this.setState({
                img,
                name
            })
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let index = this.state.index;
        if( this.props.showlist !== nextProps.showlist ){
            this.setState({
                index: ~index
            })
        }
    }
    
    showFooter = (bol) => {
        this.setState({
            showFooter: bol
        })
    }

    handleClick(){
        this.props.dispatch({
            type: 'shoplist/showOrNotShow'
        })
    }
    render(){
        const id = this.props.match.params.id;
        return(
            <div style={{height: '100%'}}>
                <div className={style.boxshadow} style={{zIndex: this.state.index}} onClick={this.handleClick.bind(this)}></div>
                <div className={style.detail_head}>
                    <div className={style.wrap}>
                        <div className={style.titleimg}>
                            <img src={this.state.img} alt="shop" />
                        </div>
                        <div className={style.mid}>
                            <div style={{color: '#fff', fontWeight: 'bold' ,fontSize: 16}}>{this.state.name}</div>
                            {/* <div style={{ color: '#fff', fontSize: 12, marginTop: 10 }}>蜂鸟专送/极速送达</div> */}
                            {/* <div style={{ color: '#fff', fontSize: 12, marginTop: 10 }}>在线支付满xx减xx</div> */}
                        </div>
                        <div className={style.backimg}>
                            <div style={{width: 40, height: 40, borderRadius: 20, background: 'rgb(104,108,111)'}}>
                                <Link to="/" ><img src={back} alt='back' /></Link>
                            </div>
                        </div>
                    </div>
                </div>    
                <DetailBar id={id} handleChange={this.showFooter.bind(this)}/>
                <ListFooter isShow={this.state.showFooter}/> 
            </div>
        )
    }
}

const mapStateToProps = ({detail}) => {
    return {
        showlist: detail.showlist
    }
}

export default connect(mapStateToProps)(Detail);