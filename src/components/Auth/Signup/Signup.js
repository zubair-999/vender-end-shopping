// import React from 'react';
// import './Signup.css';
// import  { Form, Input, SubmitButton, FormItem} from 'formik-antd';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import {useDispatch} from "react-redux";
// import {signup} from "../../../redux/actions/SignupAction";
//
//
// const Signup = ({history}) => {
//     const dispatch = useDispatch()
//     const formik=({
//         onSubmit: (shop_name, email, password) => {
//             debugger;
//             // dispatch(signup({ shop_name, email, password}, () => {
//             //     history.push('/signin')
//             // }))
//         }
//     })
//     const validation= Yup.object({
//         name: Yup.string()
//             .min(2, "Minimum 2 characters")
//             .max(15, "Maximum 15 characters")
//             .required("Required!"),
//         email: Yup.string()
//             .email("Invalid email format")
//             .required("Required!"),
//         password: Yup.string().required('Required'),
//         confirm_password: Yup.string()
//             .oneOf([Yup.ref("password")], "Password's not match")
//             .required("Required!")
//     })
//
//     return (
//         <Formik
//                 onSubmit={formik.onSubmit}
//                 validationSchema={validation}
//                 render={() => (
//                     <Form>
//                         <FormItem label='Shop Name' name={'shop_name'} required={true}>
//                             <Input name={'shop_name'}/>
//                         </FormItem>
//                         <FormItem label='Email' name={'email'} required={true}>
//                             <Input name={'email'}/>
//                         </FormItem>
//                         <Form.Item label='Password' name={'password'} required={true}>
//                             <Input name={'password'}/>
//                         </Form.Item>
//                         <Form.Item label='Confirm Password' name={'confirm_password'} required={true}>
//                             <Input name={'confirm_password'}/>
//                         </Form.Item>
//                         <SubmitButton>Submit</SubmitButton>
//                     </Form>
//                 )}
//         >
//
//         </Formik>
//     );
// }
// export default Signup;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/actions/SignupAction";
import { Link } from "react-router-dom";
import './Signup.css'


const Signup = (props) => {

    const dispatch = useDispatch()
    const userSignup=useSelector(state => state.userSignup)
    const {error}=userSignup
    console.log(error);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues: {
            shop_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            shop_name: Yup.string()
                .min(2, "Minimum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid Email format")
                .required("Required!"),
            password: Yup.string().required('Required'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: (shop_name, email, password) => {
            debugger;
            dispatch(signup({ shop_name, email, password }, () => {
                props.history.push('/signin')
            }))
        }
    });

    return (
        <Container className="Signup-form">
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <form onSubmit={formik.handleSubmit}>
                                <Form.Group >
                                    <Form.Label>Shop Name</Form.Label>
                                    <Form.Control
                                        placeholder="Shop Name"
                                        type="text"
                                        name="shop_name"
                                        value={formik.values.shop_name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.shop_name && formik.touched.shop_name && (
                                        <p>{formik.errors.shop_name}</p>
                                    )}
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <p>{formik.errors.email}</p>
                                    )}
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        placeholder="Password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <p>{formik.errors.password}</p>
                                    )}
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        placeholder="Confirm Password"
                                        type="password"
                                        name="confirm_password"
                                        value={formik.values.confirm_password}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.confirm_password && formik.touched.confirm_password && (
                                        <p>{formik.errors.confirm_password}</p>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Button
                                        variant="dark"
                                        type="submit"
                                        onSubmit={formik.handleSubmit}
                                        disabled={!formik.isValid}
                                        size="lg" block>Register</Button>
                                </Form.Group>
                                IF YOU HAVE ALREADY ACCOUNT <Link to='/signIn'>SIGN IN</Link>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

    );
}
export default Signup;

