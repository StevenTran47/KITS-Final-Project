import React from "react";
import './sidebar.css'
import { Typography, Menu } from 'antd';
import { useState } from 'react';
import Icon from '@ant-design/icons';
import { ReactComponent as dashBoard } from '../../assets/layer group.svg'
import { ReactComponent as products } from '../../assets/Vector.svg'
import { ReactComponent as customers } from '../../assets/customers.svg'
import { ReactComponent as orders } from '../../assets/orders.svg'
import { ReactComponent as shipments } from '../../assets/shipments.svg'
import { ReactComponent as creditCard } from '../../assets/credit-card.svg'
import { ReactComponent as settings } from '../../assets/settings.svg'
import { ReactComponent as logOut } from '../../assets/logout.svg'


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<p className="items-title" style={{ color: 'rgb(255, 111, 97)' }}> Dashboard</p >, 'sub1', <Icon style={{ fontSize: '30px' }} component={dashBoard} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Products</p>, 'sub2', <Icon style={{ fontSize: '30px' }} component={products} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Customers</p>, 'sub3', <Icon style={{ fontSize: '30px' }} component={customers} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Orders</p>, 'sub4', <Icon style={{ fontSize: '30px' }} component={orders} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Shipments</p>, 'sub5', <Icon style={{ fontSize: '30px' }} component={shipments} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Transactions</p>, 'sub6', <Icon style={{ fontSize: '30px' }} component={creditCard} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Settings</p>, 'sub7', <Icon style={{ fontSize: '30px' }} component={settings} />),
    getItem(<p className="items-title" style={{ color: '#CDCDCD' }}>Logout</p>, 'sub8', <Icon style={{ fontSize: '30px' }} component={logOut} />),

];
const { Title } = Typography;
export const SideBar = () => {
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <section className="admin-side-bar">
            <Title style={{
                paddingTop: 65,
                marginLeft: 70,
                marginRight: 74,

                /* identical to box height */
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 34,

                /* Black */

                color: '#1E2832',
            }}>Lisa Admin</Title>
            <Menu
                theme={"light"}
                onClick={onClick}
                style={{
                    width: 315,
                    paddingLeft: 40,
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </section >
    );
};