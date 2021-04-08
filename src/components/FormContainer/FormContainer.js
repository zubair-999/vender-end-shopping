import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './FormContainer.css'
const FormContainer = ({ children }) => {
    return (
        <Container className=" login-form">
            <Row className='justify-content-md-center'>
                <Col xs={12} md={5}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
