import React, { Fragment, useEffect, useState } from "react"
import { Container, Col, Row, Button, Form, FormGroup, Input, Card } from "reactstrap"

import SessionService from "../service/SessionService"
import CustomerService from "../service/CustomerService"
import HomeMakerService from "../service/HomeMakerService"

import { ToastContainer, toast } from "react-toastify"

const Signup = (props) => {

    const [role, setRole] = useState("")
    const [user, setUser] = useState({})
    const [service, setService] = useState({})

    useEffect(() => {
        document.title = "Sign Up"
    }, [])

    const showSignupForm = (role) => {
        setRole(role)

        if (role === "customer") {
            document.title = "Customer Signup"
            setService(CustomerService)
        }

        if (role === "homeMaker") {
            document.title = "Home Maker Signup"
            setService(HomeMakerService)
        }
    }

    // form handler function
    const handleForm = (e) => {
        e.preventDefault()
        console.log(user)
        console.log(role)
        service.addUser(user)
            .then((response) => {
                console.log(response)
                // if(response.status === 409){
                //     toast.warning("Status : " + response.status + "Duplicate Email",{position:"bottom-center"})
                // }
                // else
                toast.success("Status : " + response.status + " Name : " + response.data.result.name, { position: "bottom-center" })

                SessionService
                    .storeUser(response.data.result)
                SessionService
                    .setRole(role)
                console.log(SessionService
                    .getCurrentUser().name);
                props.history.push(`/user`, role)

                // to reload the page after login to change the header to logout
                window.location.reload()
            }, (error) => {
                console.log(error)
                // toast.error("something went wrong",{position:"bottom-center"})
                toast.warning("User Exist with this Email", { position: "bottom-center" })
            }
            )
    }

    return (

        <div>
            <ToastContainer />

            {
                !role &&
                <Container className="signup-component">
                    <Row>
                        <Col className="d-flex flex-row-reverse bd-highlight">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Customer</h5>
                                    <button className="btn bg-warning font-weight-bold"
                                        onClick={() => {
                                            showSignupForm("customer")
                                        }}>
                                        SignUp
                                </button>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Home Maker</h5>
                                    <button className="btn bg-warning font-weight-bold"
                                        onClick={() => {
                                            showSignupForm("homeMaker")
                                        }}>
                                        SignUp
                                </button>
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

                            <div className="form-row">
                                <FormGroup className="form-col col-md-6 ">
                                    <Input
                                        type="email"
                                        placeholder="Enter Email"
                                        onChange={(e) => {
                                            setUser({ ...user, email: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup className="form-col col-md-6 ">
                                    <Input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="password"
                                        onChange={(e) => {
                                            setUser({ ...user, password: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                            <FormGroup className="form-col col-md-6 ">
                                <Input
                                    type="text"
                                    placeholder="Enter Name"
                                    id="name"
                                    onChange={(e) => {
                                        setUser({ ...user, name: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="form-col col-md-6 ">
                                <Input
                                    type="phoneNo"
                                    placeholder="Enter Phone Number"
                                    id="phoneNo"
                                    onChange={(e) => {
                                        setUser({ ...user, phoneNo: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            </div>
                            <div className="form-row">
                            <FormGroup className="form-col col-md-12 ">
                                <Input
                                    type="text"
                                    placeholder="Enter Primary Address"
                                    id="primaryAddress"
                                    onChange={(e) => {
                                        setUser({ ...user, primaryAddress: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            </div>
                            <div className="form-row">
                            <FormGroup className="form-col col-md-3 ">
                                <Input
                                    type="text"
                                    placeholder="Enter City"
                                    id="city"
                                    onChange={(e) => {
                                        setUser({ ...user, city: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="form-col col-md-3 ">
                                <Input
                                    type="text"
                                    placeholder="Enter State"
                                    id="state"
                                    onChange={(e) => {
                                        setUser({ ...user, state: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="form-col col-md-3 ">
                                <Input
                                    type="text"
                                    placeholder="Enter Country"
                                    id="country"
                                    onChange={(e) => {
                                        setUser({ ...user, country: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="form-col col-md-3 ">
                                <Input
                                    type="number"
                                    placeholder="Enter Pincode"
                                    id="pincode"
                                    onChange={(e) => {
                                        setUser({ ...user, pincode: e.target.value })
                                    }}
                                />
                            </FormGroup>
                            </div>
                            <Container>
                                <Button type="submit" color="success mr-3" className="btn-lg  btn-block" >Signup</Button>
                                <Button type="reset" color="warning" className="btn-lg  btn-block" onClick={() => {
                                    setUser({});// passing blank object
                                }}>Clear</Button>
                            </Container>
                        </Form>
                    </Fragment>
                </Card>
            }
        </div>
    )
}

export default Signup