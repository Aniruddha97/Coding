import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Teach = () => {
    return (
        <div>
            <Container className="my-5 p-5">
                <Form className="w-50 my-5 p-5 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        Your email is safe with us.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me logged in" />
                    </Form.Group>
                    <div className="d-flex justify-content-around">  
                        <Button variant="warning" type="Log in">
                            Submit
                        </Button>
                        <Button variant="info">
                                Register Now
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Teach;