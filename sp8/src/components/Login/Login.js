import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import logo from '../../images/logo-c.png';
import './login.scss';


function Login() {
    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalRegisterShow, setModalRegisterShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleLogin = () => {
        setModalLoginShow(true);
        setModalRegisterShow(false);
    };
    const handleRegister = () => {
        setModalRegisterShow(true);
        setModalLoginShow(false);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    function LoginModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <img src={logo} className='logo' alt='logo' />
                </Modal.Header>

                <Modal.Body>
                    <h2>SIGN IN</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button className='submit-btn' type="submit">
                            Sign In
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <p>You don't have an account? </p><span name='login' onClick={handleRegister}>Create</span>
                </Modal.Footer>

            </Modal>
        );
    }

    function RegisterModal(props) {

        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <img src={logo} className='logo' alt='logo' />
                </Modal.Header>

                <Modal.Body>
                    <h2>CREATE YOUR ACCOUNT</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your Name" />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check required type="checkbox" label="Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies." />
                        </Form.Group>

                        <Button className='submit-btn' type="submit">
                            Create Account
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <p>Already have an account? </p><span name='login' onClick={handleLogin}>Sign In</span>
                </Modal.Footer>

            </Modal>
        );
    }

    return (
        <>
            <button name='login' onClick={handleLogin}>LOG IN</button>
            <button name='register' onClick={handleRegister}>SIGN UP</button>
            <LoginModal
                show={modalLoginShow}
                onHide={() => setModalLoginShow(false)}
            />
            <RegisterModal
                show={modalRegisterShow}
                onHide={() => setModalRegisterShow(false)}
            />
        </>
    );
}

export { Login };