import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {GiExpense, GiFactory, GiChicken, GiProfit, GiChart} from 'react-icons/gi';
import {
    LogoutOutlined,
    HomeOutlined,
    UnorderedListOutlined,
    SettingOutlined,
    MedicineBoxOutlined,
    PlusSquareOutlined,
    LineChartOutlined
} from '@ant-design/icons';

const MenuItems=()=>{

    return(

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item icon={<HomeOutlined />}>
                Dashboard
                <Link to='/dashboard' />
            </Menu.Item>
            <Menu.Item icon={<GiFactory />}>
                Products
                <Link to='/products' />
            </Menu.Item>
            <Menu.Item icon={<GiChicken/>}>
                Orders
                <Link to='/orders'/>
            </Menu.Item>
            <Menu.Item icon={<GiProfit/>}>
                Add New Product
                <Link to='/addnew'/>
            </Menu.Item>
        </Menu>
    )
}

export default MenuItems;
