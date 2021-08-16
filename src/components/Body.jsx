import React, { Component } from 'react';
import Icon from './Icon'
import list1 from '../assets/data/Icon'
import Lmht from './Lmht'
import list2 from '../assets/data/Lmht'
import Dtcl from './Dtcl'
import list3 from '../assets/data/Dtcl'


class Body extends Component {
    render() {
        const element_icon = list1.map((list) =>{
            return <Icon
                        icon = {list.icon}
                        ten = {list.ten}
            />
        })
        const element_lmht = list2.map((list) =>{
            return <Lmht
                        img = {list.img}
                        title = {list.title}
                        channel = {list.channel}
                        view = {list.view}
            />
        })
        const element_dtcl = list3.map((list)=>{
            return <Dtcl
                        img = {list.img}
                        title = {list.title}
                        channel = {list.channel}
                        view = {list.view}
                        info = {list.info}
            />
        })
        return (
            <div>
                <div className="icon__tong">{element_icon}</div>
                <h2 className = "logo"> Liên Minh Huyền Thoại</h2>
                {element_lmht}
                <h2 className = "logo"> Đấu Trường Chân Lí</h2>
                {element_dtcl}
            </div>
        );
    }
}

export default Body;