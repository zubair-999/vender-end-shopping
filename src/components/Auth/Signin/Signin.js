import React from "react";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { isLogin } from "../../../utils/index"
import * as Yup from "yup";
import { signin } from "../../../redux/actions/SigninAction";
import FormContainer from "../../FormContainer/FormContainer";

const Signin = ({ history }) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string().required('Required'),
        }),

        onSubmit: (email, password) => {
            dispatch(signin({ email, password }, () => {
                history.push("/dashboard")
            }))
        }
    });
    if (isLogin()) {
        return <Redirect to="/dashboard" />
    }
    return (
        <FormContainer>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
                    <form onSubmit={formik.handleSubmit}>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
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

                        <Form.Group>
                            <Button variant="dark"
                                    type="submit"
                                    onSubmit={formik.handleSubmit}
                                    disabled={!formik.isValid}
                                    size="lg" block>Login</Button>
                        </Form.Group>
                        New Account?{' '}
                        <Link to="/signup" >
                            Register
                        </Link>
                    </form>
                </Card.Body>
            </Card>
        </FormContainer>
    );
}
export default Signin;
