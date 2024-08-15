import React, { useEffect, useState } from "react";
import { Container, Col, Row, ListGroup } from "reactstrap";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AdminHome from "./admin/AdminHome";
import AdminManageCustomers from "./admin/AdminManageCustomers";
import AdminManageHomeMakers from "./admin/AdminManageHomeMakers";
import AdminManageOrders from "./admin/AdminManageOrders";
import CustomerHm from "./customer/CustomerHm";
import CustomerProfile from "./customer/CustomerProfile";
import HomeMakerProfile from "./home-maker/HomeMakerProfile";
import HomeMakerCustomers from "./home-maker/HomeMakerCustomers";
import EditCustomerProfile from "./customer/EditCustomerProfile";
import EditHomeMakerProfile from "./home-maker/EditHomeMakerProfile";
import CustomerOrders from "./customer/CustomerOrders";
import HomeMakerOrders from "./home-maker/HomeMakerOrders";
import CustomerMyHm from "./customer/CustomerMyHm";

// import Payment from "./Payment";
import SessionService from "../service/SessionService";

const User = () => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(SessionService.getRole());
    console.log(role);
  }, [role]);

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
  };

  return (
    <div className="text-center">
      {/* <Router> */}
        <Container>
          <Row>
            <Col>
              <ListGroup className="list-group-horizontal my-2">
                {role === "admin" &&
                  paths.admin.map((item, index) =>
                    <Link key={index} className="list-group-item list-group-item-action bg-secondary text-light font-weight-bold user-component"
                      to={item.path}>{item.value}</Link>
                  )
                }
                {role === "customer" &&
                  paths.customer.map((item, index) =>
                    <Link key={index} className="list-group-item list-group-item-action bg-secondary text-light font-weight-bold user-component"
                      to={item.path}>{item.value}</Link>
                  )
                }
                {role === "homeMaker" &&
                  paths.homeMaker.map((item, index) =>
                    <Link key={index} className="list-group-item list-group-item-action bg-secondary text-light font-weight-bold user-component"
                      to={item.path}>{item.value}</Link>
                  )
                }
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              {role === "customer" && (
                <Routes>
                  <Route path="/customer/profile" element={<CustomerProfile />} />
                  <Route path="/user" element={<CustomerProfile />} />
                  <Route path="/customer/homeMaker" element={<CustomerHm />} />
                  <Route path="/customer/myHomeMaker" element={<CustomerMyHm />} />
                  {/* <Route path="/customer/myPlan" element={<CustomerPlan />} /> */}
                  <Route path="/customer/edit-profile" element={<EditCustomerProfile />} />
                  <Route path="/customer/orders" element={<CustomerOrders />} />
                </Routes>
              )}
              {role === "admin" && (
                <Routes>
                  <Route path="/admin/profile" element={<AdminHome />} />
                  <Route path="/user" element={<AdminHome />} />
                  <Route path="/admin/manageCustomers" element={<AdminManageCustomers />} />
                  <Route path="/admin/manageHomeMakers" element={<AdminManageHomeMakers />} />
                  <Route path="/admin/manageOrders" element={<AdminManageOrders />} />
                </Routes>
              )}
              {role === "homeMaker" && (
                <Routes>
                  <Route path="/homeMaker/profile" element={<HomeMakerProfile />} />
                  <Route path="/user" element={<HomeMakerProfile />} />
                  <Route path="/homeMaker/customers" element={<HomeMakerCustomers />} />
                  <Route path="/homeMaker/edit-profile" element={<EditHomeMakerProfile />} />
                  <Route path="/homeMaker/orders" element={<HomeMakerOrders />} />
                </Routes>
              )}
            </Col>
          </Row>
        </Container>
      {/* </Router> */}
    </div>
  );
};

export default User;

