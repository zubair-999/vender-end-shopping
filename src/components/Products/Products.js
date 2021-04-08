import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction} from "../../redux/actions/ProductAction";
import {Button, Col, Row} from "react-bootstrap";
import Product from "./Product";
import { Pagination } from 'antd';
import {useHistory} from "react-router-dom";

const Products=()=>{
    const history=useHistory()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(ProductAction())
    },[dispatch])
    const productList=useSelector(state => state.productList)
    const {products}=productList
    const changeListHandler=()=>{
        history.push('/productGird')
    }
    const changeGirdHandler=()=>{
        history.push('/productList')
    }
    return(
        <div>
            <Button onClick={changeGirdHandler}>Gird</Button>
            <Button onClick={changeListHandler}>List</Button>
            <Row>
                {products && products.map((product)=> (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                        <Pagination defaultCurrent={1} total={8} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Products;
