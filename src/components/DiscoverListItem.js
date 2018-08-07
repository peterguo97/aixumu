import React from 'react';
import { Link } from 'dva/router';
import normal from './css/basic.css';

class DiscoverListItem extends React.Component {
    render(){
        const data = this.props.data;
        console.log(data);
        
        return(
            <div className={ normal.discoverItem } style={{height: 77}}>
                <Link to={data.url}>
                    <div className={normal.imgDetail}><img src={data.img} alt="图片详情" style={{ height: 40}}/></div>
                    <div className={normal.itemTitle}>{data.name}</div>
                </Link>
            </div>
        )
    }
}

export default DiscoverListItem;