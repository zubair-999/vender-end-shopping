import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import { Pagination } from 'antd';
import {OrderAction} from "../../redux/actions/OrderAction";
import Order from './order'

const Orders=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(OrderAction())
    },[dispatch])
    const orderList=useSelector(state => state.orderList)
    const {orders}=orderList
    return(
        <Row>
            {orders && orders.map((order)=> (
                <Col key={order.id} sm={12} md={6} lg={4} xl={3}>
                    <Order order={order}/>
                    <Pagination defaultCurrent={1} total={8} />
                </Col>
            ))}
        </Row>
    )
}
export default Orders;
