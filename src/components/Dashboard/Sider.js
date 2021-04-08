import React,{ Fragment} from 'react'
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import './Sider.css';
import MenuItems from "./MenuItem";

const { Sider } = Layout;


const Sidebar=(props)=> {

    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} style={{height:'100vh'}}>
            <div className="logo" />
            <MenuItems/>
        </Sider>
    );
}

export default withRouter(Sidebar);



