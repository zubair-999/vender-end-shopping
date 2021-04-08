import React, {useEffect} from 'react';
import {Button, Table, Tooltip, Popconfirm} from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction} from "../../redux/actions/ProductAction";
import {ProductDeleteAction} from "../../redux/actions/ProductFunAction";
import { useHistory } from "react-router-dom";


const ProductTable=()=> {
    const history=useHistory();
    const dispatch=useDispatch();
    const productList=useSelector(state => state.productList)
    const {products}=productList
    useEffect(()=>{
        dispatch(ProductAction())
    },[dispatch])
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
    const changeListHandler=()=>{
        history.push('/productGird')
    }
    const changeGirdHandler=()=>{
        history.push('/productList')
    }
    return (
        <div>
            <Button onClick={changeGirdHandler}>Gird</Button>
            <Button onClick={changeListHandler}>List</Button>
            <Table style={{marginTop:"40px"}}
                   columns={[
                       {
                           title: 'Name',
                           dataIndex: 'name',
                           key: 'name',
                       },
                       {
                           title: 'Price',
                           dataIndex: 'price',
                           key: 'price',
                       },
                       {
                           title: 'Stock',
                           dataIndex: 'stock',
                           key: 'stock',
                       },
                       {
                           title: 'Category',
                           dataIndex: 'category',
                           key: 'category',
                       },
                       {
                           title: 'Description',
                           dataIndex: 'description',
                           key: 'description',
                       },
                       {
                           title: 'Action',
                           dataIndex: '',
                           key: 'x',
                           render: (record) => (
                               <div style={{display: 'flex'}} className="d-flex">
                                   <div style={{marginRight: '10px'}}>
                                       <Popconfirm
                                           title="Are you sure to Edit this Task?"
                                           okText="Yes"
                                           cancelText="No"
                                           onConfirm={() => onProductEditHandler(record.id)}
                                       >
                                           <Tooltip title="Edit Task">
                                               <Button
                                                   className="d-flex justify-content-center align-items-center"
                                                   shape="circle"
                                                   icon={<EditOutlined/>}
                                               />
                                           </Tooltip>
                                       </Popconfirm>
                                   </div>
                                   <Popconfirm
                                       title="Are you sure to delete this Task?"
                                       okText="Yes"
                                       cancelText="No"
                                       style={{marginLeft: '30px'}}
                                       onConfirm={() => onProductDeleteHandler(record.id)}
                                   >
                                       <Tooltip title="Delete Task">
                                           <Button
                                               className="d-flex justify-content-center align-items-center"
                                               shape="circle"
                                               icon={<DeleteOutlined/>}
                                           />
                                       </Tooltip>
                                   </Popconfirm>
                               </div>
                           ),
                       },
                   ]}
                   dataSource={products}
            />
        </div>
    );
}
export default ProductTable;
