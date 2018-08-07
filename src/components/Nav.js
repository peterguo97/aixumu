import React from 'react';

import { Carousel, WingBlank } from 'antd-mobile';
import axios from "axios";

class Nav extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        axios.get('/api/photo/show').then(message => {
            const data = message.data;
            console.log(data);
            
            this.setState({
                data
            })
        });
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <div
                            key={val.id}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <a href={val.link}>
                             <img
                                src={val.url}
                                alt={val.url}
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                           
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Nav;
