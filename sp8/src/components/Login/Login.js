import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import logo from '../../images/logo-c.png';
import './login.scss';


function Login({ onChange }) {

    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalRegisterShow, setModalRegisterShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [authToken, setAuthToken] = useState(false);
    const formRef = useRef();

    const handleRegisterForm = (event) => {
        event.preventDefault();
        const RegisterFormData = new FormData(formRef.current);
        const valuesRegisterForm = Object.fromEntries(RegisterFormData);
        
        localStorage.setItem(valuesRegisterForm.email, JSON.stringify(valuesRegisterForm));

        setAuthToken(true);
        setModalRegisterShow(false);
        setModalLoginShow(false);
    }

    const handleLoginForm = (event) => {
        event.preventDefault();
        const LoginFormData = new FormData(formRef.current);
        const valuesLoginForm = Object.fromEntries(LoginFormData);
        const userStorage = JSON.parse(localStorage.getItem(valuesLoginForm.email));
        
        if (userStorage && userStorage.password === valuesLoginForm.password) {
            setAuthToken(true);
            setModalRegisterShow(false);
            setModalLoginShow(false);
        } else {
            setAuthToken(false);
            setShowError(true);
        }
    }

    useEffect(() => {
        if (authToken) {
            onChange(authToken);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authToken]);


    const handleLogin = () => {
        setModalLoginShow(true);
        setModalRegisterShow(false);
    };
    const handleRegister = () => {
        setModalRegisterShow(true);
        setModalLoginShow(false);
    };

    function LoginModal(props) {
        return (
            <Modal
                {...props}
                id="loginModal"
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <img src={logo} className='logo' alt='logo' />
                </Modal.Header>

                <Modal.Body>
                    <h2>SIGN IN</h2>
                    <form onSubmit={handleLoginForm} ref={formRef}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button className='submit-btn' type="submit" value="Submit">
                            Sign In
                        </Button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    {showError && <p className='error'>Connection Error!</p>}
                    <p>You don't have an account? <span name='login' onClick={handleRegister}>Create</span></p>
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
                    <form onSubmit={handleRegisterForm} ref={formRef}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your Name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your Password.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check required type="checkbox" label="Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies." />
                        </Form.Group>

                        <Button className='submit-btn' type="submit" value="Submit">
                            Create Account
                        </Button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <p>Already have an account? <span name='login' onClick={handleLogin}>Sign In</span></p>
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