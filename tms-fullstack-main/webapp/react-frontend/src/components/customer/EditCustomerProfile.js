import React, { Fragment, useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { Button, Card, Container, Form, FormGroup, Input } from "reactstrap"
import SessionService from "../../service/SessionService"
import CustomerService from "../../service/CustomerService"

const EditCustomerProfile = (props) => {
    const [role] = useState(SessionService.getRole())
    const [user, setUser] = useState({})

    const [verified, setVerified] = useState(false)

    useEffect(() => {
        document.title = "Edit Profile"

        // initializing/populating the state of the user
        setUser(SessionService.getCurrentUser())
    }, [])

    const updateUserDetails = (e) => {
        e.preventDefault();//event object method : it prevents unnecessarily event execution
        // default event handling we are suppressing, i don't want default event handling, i want the below code to execute

        // before updating the details verfying the password

        CustomerService.authenticateUser(user.email, user.password)
            .then((response) => {
                console.log(response)
                if (response.status === 204) {
                    toast.warning("Status : " + response.status + " Invalid Credentials!!!", { position: "bottom-center" })
                }
                else {
                    setVerified(true)
                }
            })

        if (verified) {
            CustomerService.updateUserDetails(user)
                .then((response) => {
                    console.log(response)
                    toast.success("Profile Updated !!!", { position: "bottom-center" })
                    console.log(response.data.result)
                    // storing the updated user details
                    SessionService.storeUser(response.data.result)
                }, (error) => {
                    console.log(error)
                    toast.error("something went wrong", { position: "bottom-center" })
                })
        }
    }
    return (
        <Card className="signup-form">
            <Fragment>
                <Form onSubmit={updateUserDetails}>
                    <h3 className="text-center my-3 py-3">Edit {role} Profile</h3>
                    <div className="form-row">
                        <FormGroup className="form-col col-md-6 ">
                            <Input
                                type="text"
                                placeholder="Enter email here"
                                id="email"
                                value={user.email}
                                readonly="true"
                            />
                        </FormGroup>
                        <FormGroup className="form-col col-md-6 ">
                            <Input
                                type="password"
                                placeholder="Enter password here"
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
                                placeholder="Enter name here"
                                id="name"
                                value={user.name}
                                onChange={(e) => {
                                    setUser({ ...user, name: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup className="form-col col-md-6 ">
                            <Input
                                type="phoneNo"
                                placeholder="Enter phoneNo here"
                                id="phoneNo"
                                value={user.phoneNo}
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
                                placeholder="Enter primaryAddress here"
                                id="primaryAddress"
                                value={user.primaryAddress}
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
                                placeholder="Enter City here"
                                id="city"
                                value={user.city}
                                onChange={(e) => {
                                    setUser({ ...user, city: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup className="form-col col-md-3 ">
                            <Input
                                type="text"
                                placeholder="Enter State here"
                                id="state"
                                value={user.state}
                                onChange={(e) => {
                                    setUser({ ...user, state: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup className="form-col col-md-3 ">
                            <Input
                                type="text"
                                placeholder="Enter Country here"
                                id="country"
                                value={user.country}
                                onChange={(e) => {
                                    setUser({ ...user, country: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup className="form-col col-md-3 ">
                            <Input
                                type="number"
                                placeholder="Enter pincode here"
                                id="pincode"
                                value={user.pincode}
                                onChange={(e) => {
                                    setUser({ ...user, pincode: e.target.value })
                                }}
                            />
                        </FormGroup>
                    </div>
                    <Container>
                        <Button type="submit" color="success mr-3">Save Details</Button>
                    </Container>
                </Form>
            </Fragment>
        </Card>
    )
}

export default EditCustomerProfile;