import React, {useEffect, useState} from 'react';
import { Layout, Menu} from 'antd';
import ModalCard from "./Dropdow";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import Sidebar from "./Sider";
import PrivateRoute from "../Auth/PrivateRoute/PrivateRoute";
import AddProduct from "../Products/AddProduct";
import EditProduct from "../Products/EditProduct";
import Products from "../Products/Products";
import ProductTable from "../Products/ProductTable";
import Orders from "../orders/orders";


const { Header, Footer, Content } = Layout;
const Dashboard=()=>{
    const [collapsed, setCollapse]=useState(false)
    const toggle = () => {
        setCollapse( !collapsed)
    };
    return(
        <Layout>
            <Sidebar collapsed={collapsed}/>
            <Layout>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <ModalCard/>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <PrivateRoute path="/products" exact component={Products}/>
                    <PrivateRoute path="/addnew" exact component={AddProduct}/>
                    <PrivateRoute path="/edit/:id" exact component={EditProduct}/>
                    <PrivateRoute path="/productList" exact component={Products}/>
                    <PrivateRoute path="/productGird" exact component={ProductTable}/>
                    <PrivateRoute path="/orders" exact component={Orders}/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>EBazzar ©2021 Created by Techling</Footer>
            </Layout>
        </Layout>
    )
}

export default Dashboard;








// import React, {useEffect, useState} from 'react';
// import { Layout, Menu} from 'antd';
// import ModalCard from "./Dropdow";
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
// } from '@ant-design/icons';
// import Sidebar from "./Sider";
// import PrivateRoute from "../Auth/PrivateRoute/PrivateRoute";
// import AddProduct from "../Products/AddProduct";
// import EditProduct from "../Products/EditProduct";
// import Products from "../Products/Products";
// import ProductTable from "../Products/ProductTable";
// import Orders from "../orders/orders";


// const { Header, Footer, Content } = Layout;
// const Dashboard=()=>{
//     const [collapsed, setCollapse]=useState(false)
//     const toggle = () => {
//         setCollapse( !collapsed)
//     };
//     return(
//         <Layout>
//             <Sidebar collapsed={collapsed}/>
//             <Layout>
//                 <Header className="site-layout-background" style={{ padding: 0 }}>
//                     {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: 'trigger',
//                         onClick: toggle,
//                     })}
//                     <ModalCard/>
//                 </Header>
//                 <Footer style={{ textAlign: 'center' }}>EBazzar ©2021 Created by Techling</Footer>
//             </Layout>
//         </Layout>
//     )
// }
//
// export default Dashboard;
