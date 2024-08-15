import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, Button, Form, FormGroup, Input, Card } from "reactstrap";
import SessionService from "../service/SessionService";
import CustomerService from "../service/CustomerService";
import HomeMakerService from "../service/HomeMakerService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [role, setRole] = useState("");
    const [user, setUser] = useState({});
    const [service, setService] = useState({});
    const navigate = useNavigate(); // Use useNavigate for routing

    useEffect(() => {
        document.title = "Sign Up";
    }, []);

    const showSignupForm = (role) => {
        setRole(role);
        document.title = role === "customer" ? "Customer Signup" : "Home Maker Signup";
        setService(role === "customer" ? CustomerService : HomeMakerService);
    };

    const handleForm = (e) => {
        e.preventDefault();

        service.addUser(user)
            .then((response) => {
                toast.success(`Status: ${response.status} Name: ${response.data.result.name}`, { position: "bottom-center" });

                SessionService.storeUser(response.data.result);
                SessionService.setRole(role);

                navigate("/user", { state: { role } }); // Corrected navigate path

                // Reload the page after login to change the header to logout
                window.location.reload();
            })
            .catch((error) => {
                toast.warning("User exists with this email", { position: "bottom-center" });
            });
    };

    return (
        <div>
            <ToastContainer />
            {
                !role &&
                <Container className="signup-component">
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Customer</h5>
                                    <Button
                                        color="warning"
                                        className="font-weight-bold"
                                        onClick={() => showSignupForm("customer")}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Home Maker</h5>
                                    <Button
                                        color="warning"
                                        className="font-weight-bold"
                                        onClick={() => showSignupForm("homeMaker")}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }

            {/* Signup Form */}
            {
                role &&
                <Card className="signup-form">
                    <Fragment>
                        <Form onSubmit={handleForm}>
                            <h3 className="text-center my-3 py-3">Register {role}</h3>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            type="email"
                                            placeholder="Enter Email"
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            type="password"
                                            placeholder="Enter Password"
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            placeholder="Enter Name"
                                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            placeholder="Enter Phone Number"
                                            onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Input
                                    type="text"
                                    placeholder="Enter Primary Address"
                                    onChange={(e) => setUser({ ...user, primaryAddress: e.target.value })}
                                />
                            </FormGroup>
                            <Row>
                                <Col md={3}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            placeholder="Enter City"
                                            onChange={(e) => setUser({ ...user, city: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            placeholder="Enter State"
                                            onChange={(e) => setUser({ ...user, state: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            placeholder="Enter Country"
                                            onChange={(e) => setUser({ ...user, country: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Input
                                            type="number"
                                            placeholder="Enter Pincode"
                                            onChange={(e) => setUser({ ...user, pincode: e.target.value })}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Container>
                                <Button type="submit" color="success" className="btn-lg btn-block">Sign Up</Button>
                                <Button type="reset" color="warning" className="btn-lg btn-block" onClick={() => setUser({})}>Clear</Button>
                            </Container>
                        </Form>
                    </Fragment>
                </Card>
            }
        </div>
    );
}

export default Signup;
