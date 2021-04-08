import React from 'react';
import {Button, Card, CardImg} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ProductDeleteAction} from "../../redux/actions/ProductFunAction";
import { useHistory } from "react-router-dom";


const Product=({product})=>{
    debugger;
    let history = useHistory();
    const dispatch=useDispatch();
    const productList=useSelector(state => state.productList)
    const {products}=productList;
    const onProductEditHandler = (id) => {
        debugger
        products.filter(product => {
            if (product.id === id) {
                return true
            }
            else {
                return false
            }
        })
        history.push(`/edit/${id}`)
    }

    const onProductDeleteHandler = (id) => {
        dispatch(ProductDeleteAction(id))
    }
    return(
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <CardImg src={product.image} variant='top' />
            </a>

            <Card.Body>
                <a href={`/product/${product.id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='h3'>
                    RS {product.price}
                </Card.Text>
                <Card.Text as='h3'>
                     {product.stock}
                </Card.Text>
                <Card.Text as='h3'>
                     {product.category}
                </Card.Text>
                <Card.Text as='h5'>
                     {product.description}
                </Card.Text>
            </Card.Body>
            <Button variant="dark" size="sm" id={product.id} onClick={() => onProductEditHandler(product.id)}>Edit</Button>
            <Button variant="dark" size="sm" id={product.id} onClick={() => onProductDeleteHandler(product.id)} >Delete</Button>
        </Card>
    )
}

export default Product;
