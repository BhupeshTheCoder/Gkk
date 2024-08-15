import React, { Fragment, useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Container, Col, Row, Button, Form, FormGroup, Input, Card } from "reactstrap"
import { ToastContainer, toast } from "react-toastify"

import SessionService from "../service/SessionService"
import AdminService from "../service/AdminService"
import CustomerService from "../service/CustomerService"
import HomeMakerService from "../service/HomeMakerService"

const Login = (props) => {
    const [user, setUser] = useState({})
    const [role, setRole] = useState()
    const [service, setService] = useState()


    useEffect(() => {
        document.title = "Login"
        setUser(SessionService.getCurrentUser)
        setRole(SessionService.getRole)

    }, [])// to skip did update

    const showLoginForm = (role) => {
        setRole(role)
        if (role === "admin") {
            document.title = "Admin Login"
            setService(AdminService)
        }

        if (role === "customer") {
            document.title = "Customer Login"
            setService(CustomerService)
        }

        if (role === "homeMaker") {
            document.title = "HomeMaker Login"
            setService(HomeMakerService)
        }
    }

    // form handler function
    const handleForm = (e) => {
        e.preventDefault()
        console.log(user)
        service.authenticateUser(user.email, user.password)
            .then((response) => {
                console.log(response)
                if (response.status === 204) {
                    toast.warning("Status : " + response.status + " Invalid Credentials!!!", { position: "bottom-center" })
                }
                else {
                    toast.success("Status : " + response.status + " Name : " + response.data.name, { position: "bottom-center" })

                    SessionService.storeUser(response.data)
                    SessionService.setRole(role)

                    props.history.push('/user')

                    // to reload the page after login to change the header to logout
                    window.location.reload()
                    console.log(SessionService.getCurrentUser.name);
                }
            }, (error) => {
                console.log(error)
                toast.error("something went wrong", { position: "bottom-center" })
            })
    }

    return (
        <div>
            <ToastContainer />
            <Router>
                <Container>

                    {
                        !role &&
                        <Container className="login-component">
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Admin</h5>
                                            <p className="card-text">Manage Customer / Home Makers / Orders and much more..</p>
                                            <button className="btn bg-warning font-weight-bold"
                                                onClick={() => {
                                                    showLoginForm("admin")
                                                }}>
                                                Admin Login
                                            </button>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Customer</h5>
                                            <p className="card-text">Manage Profile / Home Makers / Food Packages and much more..</p>
                                            <button className="btn bg-warning font-weight-bold"
                                                onClick={() => {
                                                    showLoginForm("customer")
                                                }}>
                                                Customer Login
                                            </button>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Home Maker</h5>
                                            <p className="card-text">Manage Profile / Customers / Orders and much more...</p>
                                            <button className="btn bg-warning font-weight-bold"
                                                onClick={() => {
                                                    showLoginForm("homeMaker")
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
                        <Card className="login-form">
                            <Fragment>
                                <Form onSubmit={handleForm}>
                                    <FormGroup>
                                        <h3 className="text-center my-3 py-3">Enter {role} Credentials</h3>
                                        <Input
                                            type="email"
                                            placeholder="Enter email here"
                                            id="email"
                                            onChange={(e) => {
                                                setUser({ ...user, email: e.target.value })
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="password"
                                            placeholder="Enter password here"
                                            id="password"
                                            onChange={(e) => {
                                                setUser({ ...user, password: e.target.value })
                                            }}
                                        />
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button className="btn-lg  btn-block" type="submit" color="success mr-3">Login</Button>
                                        <Button type="reset" color="warning" className="btn-lg  btn-block" onClick={() => {
                                            setUser({});// passing blank object
                                        }}>Clear</Button>
                                    </Container>
                                </Form>
                            </Fragment>
                        </Card>
                    }
                </Container>
            </Router>
        </div>
    )
}

export default Login