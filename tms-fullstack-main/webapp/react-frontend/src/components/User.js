import React, { useEffect, useState } from "react"
import { Container, Col, Row, ListGroup } from "reactstrap"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

import AdminHome from "./admin/AdminHome"
import AdminManageCustomers from "./admin/AdminManageCustomers"
import AdminManageHomeMakers from "./admin/AdminManageHomeMakers"
import AdminManageOrders from "./admin/AdminManageOrders"
import CustomerHm from "./customer/CustomerHm"
import CustomerProfile from "./customer/CustomerProfile"
import HomeMakerProfile from "./home-maker/HomeMakerProfile"
import HomeMakerCustomers from "./home-maker/HomeMakerCustomers"
import CustomerMyHm from "./customer/CustomerMyHm"
import CustomerPlan from "./customer/CustomerPlan"
import EditCustomerProfile from "./customer/EditCustomerProfile"
import EditHomeMakerProfile from "./home-maker/EditHomeMakerProfile"
import CustomerOrders from "./customer/CustomerOrders"
import HomeMakerOrders from "./home-maker/HomeMakerOrders"

import Payment from "./Payment"
import SessionService from "../service/SessionService"

const User = () => {

  const [role, setRole] = useState()

  useEffect(() => {
    setRole(SessionService.getRole)
    console.log(role)
  }, [role])

  const paths = {
    admin: [
      { path: "/admin/profile", value: "Admin Home" },
      { path: "/admin/manageCustomers", value: "Manage Customers" },
      { path: "/admin/manageHomeMakers", value: "Manage Home Makers" },
      { path: "/admin/manageOrders", value: "Manage Orders" }
    ],
    customer: [
      { path: "/customer/profile", value: "Customer Profile" },
      { path: "/customer/myHomeMaker", value: "My Home Maker" },
      { path: "/customer/orders", value: "My Orders" },
    ],
    homeMaker: [
      { path: "/homeMaker/profile", value: "Home Maker Profile" },
      { path: "/homeMaker/customers", value: "My Customers" },
      { path: "/homeMaker/orders", value: "My Orders" }
    ]
  }

  return (
    <div className="text-center">
      <Router>
        <Container>
          <Row>
            <Col>
              <ListGroup className="list-group-horizontal my-2">
                {role === "admin" &&
                  paths.admin.map((item, index) =>
                    <Link key={index} className="list-group-item list-group-item-action bg-secondary text-light font-weight-bold user-component"
                      tag="a" to={item.path}>{item.value}</Link>
                  )
                }
                {role === "customer" &&
                  paths.customer.map((item, index) =>
                    <Link key={index} className="list-group-item list-group-item-action bg-secondary text-light font-weight-bold user-component"
                      tag="a" to={item.path}>{item.value}</Link>
                  )
                }
                {role === "homeMaker" &&
                  paths.homeMaker.map((item, index) =>
                    <Link key={index} className="list-group-item list-group-item-action bg-secondary text-light font-weight-bold user-component"
                      tag="a" to={item.path}>{item.value}</Link>
                  )
                }
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              {
                role === "customer" &&
                <Switch>
                  <Route path={["/customer/profile", "/user"]} component={CustomerProfile} />
                  <Route path="/customer/homeMaker" component={CustomerHm} exact />
                  <Route path="/customer/myHomeMaker" component={CustomerMyHm} exact />
                  {/* <Route path="/customer/myPlan" component={CustomerPlan} exact /> */}
                  <Route path="/customer/edit-profile" component={EditCustomerProfile} exact />
                  <Route path="/customer/orders" component={CustomerOrders} exact />
                  <Route path="/payment" component={Payment} exact />
                </Switch>
              }
              {
                role === "admin" &&
                <Switch>
                  <Route path={["/admin/profile", "/user"]} component={AdminHome} />
                  <Route path="/admin/manageCustomers" component={AdminManageCustomers} exact />
                  <Route path="/admin/manageHomeMakers" component={AdminManageHomeMakers} exact />
                  <Route path="/admin/manageOrders" component={AdminManageOrders} exact />
                </Switch>
              }
              {
                role === "homeMaker" &&
                <Switch>
                  <Route path={["/homeMaker/profile", "/user"]} component={HomeMakerProfile} />
                  <Route path="/homeMaker/customers" component={HomeMakerCustomers} exact />
                  <Route path="/homeMaker/edit-profile" component={EditHomeMakerProfile} exact />
                  <Route path="/homeMaker/orders" component={HomeMakerOrders} exact />
                </Switch>
              }
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}
export default User