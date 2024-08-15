import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Button, Form, FormGroup, Input, Card } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import SessionService from "../service/SessionService";
import AdminService from "../service/AdminService";
import CustomerService from "../service/CustomerService";
import HomeMakerService from "../service/HomeMakerService";

const Login = (props) => {
    const [user, setUser] = useState({});
    const [role, setRole] = useState();
    const [service, setService] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login";
        setUser(SessionService.getCurrentUser());
        setRole(SessionService.getRole());
    }, []);

    const showLoginForm = (role) => {
        setRole(role);
        if (role === "admin") {
            document.title = "Admin Login";
            setService(AdminService);
        }

        if (role === "customer") {
            document.title = "Customer Login";
            setService(CustomerService);
        }

        if (role === "homeMaker") {
            document.title = "HomeMaker Login";
            setService(HomeMakerService);
        }
    };

    // form handler function
    const handleForm = (e) => {
        e.preventDefault();
        console.log(user);
        service.authenticateUser(user.email, user.password)
            .then((response) => {
                console.log(response);
                if (response.status === 204) {
                    toast.warning("Status : " + response.status + " Invalid Credentials!!!", { position: "bottom-center" });
                } else {
                    toast.success("Status : " + response.status + " Name : " + response.data.name, { position: "bottom-center" });

                    SessionService.storeUser(response.data);
                    SessionService.setRole(role);

                    navigate('/user');

                    // to reload the page after login to change the header to logout
                    window.location.reload();
                    console.log(SessionService.getCurrentUser().name);
                }
            }, (error) => {
                console.log(error);
                toast.error("something went wrong", { position: "bottom-center" });
            });
    };

    //css of login form
    const styles = {
        card: {
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
        },
        cardText: {
            fontSize: "14px",
            color: "#777",
        },
        button: {
            backgroundColor: "#ffc107",
            color: "#fff",
            fontWeight: "bold",
            marginTop: "10px",
        },
        loginForm: {
            marginTop: "30px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        formTitle: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        input: {
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
        },
        formButton: {
            padding: "10px",
            fontSize: "18px",
            marginTop: "10px",
        },
        Container: {
            height: "321px",
        },
    };

    return (
        <div>
        <ToastContainer />
        <Container>
            {
                !role &&
                <Container className="login-component">
                    <Row>
                        <Col>
                            <div style={styles.card}>
                                <div>
                                    <h5 style={styles.cardTitle}>Admin</h5>
                                    <p style={styles.cardText}>Manage Customer / Home Makers / Orders and much more..</p>
                                    <button style={styles.button}
                                        onClick={() => {
                                            showLoginForm("admin");
                                        }}>
                                        Admin Login
                                    </button>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div style={styles.card}>
                                <div>
                                    <h5 style={styles.cardTitle}>Customer</h5>
                                    <p style={styles.cardText}>Manage Profile / Home Makers / Food Packages and much more..</p>
                                    <button style={styles.button}
                                        onClick={() => {
                                            showLoginForm("customer");
                                        }}>
                                        Customer Login
                                    </button>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div style={styles.card}>
                                <div>
                                    <h5 style={styles.cardTitle}>Home Maker</h5>
                                    <p style={styles.cardText}>Manage Profile / Customers / Orders and much more...</p>
                                    <button style={styles.button}
                                        onClick={() => {
                                            showLoginForm("homeMaker");
                                        }}>
                                        Home Maker Login
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }

            {
                role &&
                <Card style={styles.loginForm}>
                    <Fragment>
                        <Form onSubmit={handleForm}>
                            <FormGroup>
                                <h3 style={styles.formTitle} className="text-center my-3 py-3">Enter {role} Credentials</h3>
                                <Input
                                    style={styles.input}
                                    type="email"
                                    placeholder="Enter email here"
                                    id="email"
                                    onChange={(e) => {
                                        setUser({ ...user, email: e.target.value });
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    style={styles.input}
                                    type="password"
                                    placeholder="Enter password here"
                                    id="password"
                                    onChange={(e) => {
                                        setUser({ ...user, password: e.target.value });
                                    }}
                                />
                            </FormGroup>
                            <Container className="text-center">
                                <Button style={styles.formButton} className="btn-lg btn-block" type="submit" color="success mr-3">Login</Button>
                                <Button style={styles.formButton} type="reset" color="warning" className="btn-lg btn-block" onClick={() => {
                                    setUser({}); // passing blank object
                                }}>Clear</Button>
                            </Container>
                        </Form>
                    </Fragment>
                </Card>
            }
        </Container>
    </div>
    )
}

export default Login;