import React from 'react';
import { PullToRefresh } from 'antd-mobile';
import normal from './css/basic.css';
import DiscoverListitem from './DiscoverListItem';
import axios from 'axios';
const offset = 0;

class Discover extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
            refreshing: false,
        }
    }
    componentDidMount = () => {
        console.log(offset);
        axios.post('/api/gofun',{offset: offset}).then((message)=>{
            this.setState({
                data: message.data
            })
        })
    }

    onMyRefresh = () => {
        this.setState({
            refreshing: true,
        })
        offset += 1;
        let myoffset = offset * 18;
        axios.post('/api/gofun', { offset: myoffset }).then((message) => {
            let data = this.state.data.concat(message.data);
            this.setState({
                refreshing: false,
                data: data,
            })
        })
    }
    
    componentWillUnmouint = () => {
        offset = 0;
    }

    render(){
        let data = this.state.data;
        return(
            <div className={normal.Wrapper}>
                <div className={normal.back}>
                    <span style={{padding: '8px'}}>发现</span>
                </div>
                <div className={normal.discoverlist}>
                    {
                        <PullToRefresh
                            damping={60}
                            indicator={{ deactivate: '上拉可以刷新' }}
                            direction='up'
                            refreshing={this.state.refreshing}
                            onRefresh={this.onMyRefresh}
                        >
                            {this.state.data.map( (value, index) => (
                                <div key={index} className={normal.discoverWrap}>
                                    <DiscoverListitem data={value} />
                                </div>
                            ))}
                        </PullToRefresh>
                    }
                </div>
            </div>
        )
    }
}

export default Discover;