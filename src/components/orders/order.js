import React from 'react';
import {Button, Card, CardImg} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ProductDeleteAction} from "../../redux/actions/ProductFunAction";
import { useHistory } from "react-router-dom";


const Order=({order})=>{
    debugger;
    let history = useHistory();
    // const dispatch=useDispatch();
    // const orderList=useSelector(state => state.orderList)
    // const {orders}=orderList;
    // const onProductEditHandler = (id) => {
    //     debugger
    //     products.filter(product => {
    //         if (product.id === id) {
    //             return true
    //         }
    //         else {
    //             return false
    //         }
    //     })
    //     history.push(`/edit/${id}`)
    // }
    //
    // const onProductDeleteHandler = (id) => {
    //     dispatch(ProductDeleteAction(id))
    // }
    return(
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${order.id}`}>
                <CardImg src={order.image} variant='top' />
            </a>

            <Card.Body>
                <a href={`/product/${order.id}`}>
                    <Card.Title as='div'>
                        <strong>{order.product}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='h3'>
                    RS {order.quantity}
                </Card.Text>
                <Card.Text as='h3'>
                    {order.address}
                </Card.Text>
                <Card.Text as='h3'>
                    {order.payment_mode}
                </Card.Text>
                <Card.Text as='h5'>
                    {order.description}
                </Card.Text>
                <Card.Text as='h5'>
                    {order.delivery_charges}
                </Card.Text>
            </Card.Body>
            <Button variant="dark" size="sm" id={order.id}>Edit</Button>
            <Button variant="dark" size="sm" id={order.id}>Delete</Button>
        </Card>
    )
}

export default Order;
