import React, {useState} from "react";
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined , LogoutOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/SigninAction";
import {withRouter} from "react-router-dom";

const ModalCard=({history}) => {
    const userSignin=useSelector(state => state.userSignin)
    const [visible, setVisible]=useState(false);
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout(() => {
            history.push("/signin")
        }))
    }
    const handleMenuClick = e => {
        if (e.key === '3') {
            setVisible(visible)
        }
    };

    const handleVisibleChange = flag => {
        setVisible(flag)
    };
    const menu = (
        <Menu onClick={handleMenuClick} >
            <Menu.Item key="1" onClick={logoutHandler}><LogoutOutlined />Logout</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown
            overlay={menu}
            onVisibleChange={handleVisibleChange}
            visible={visible}
        >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{float:"right", marginRight:"100px"}}>
                <CaretDownOutlined  style={{color:"white"}} />
            </a>
        </Dropdown>
    );
}
export default withRouter(ModalCard);
