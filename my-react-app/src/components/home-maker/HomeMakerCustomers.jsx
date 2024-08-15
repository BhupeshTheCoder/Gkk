import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import { toast } from "react-toastify";
import HomeMakerService from "../../service/HomeMakerService";
import SessionService from "../../service/SessionService";

const HomeMakerCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    document.title = "Customer || HomeMaker";
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await HomeMakerService.getMyCustomers(SessionService.getCurrentUser().id);
      console.log(response);
      setCustomers(response.data.result);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "bottom-center" });
    }
  };

  return (
    <Container className="text-center">
      <div className="text-center" style={{ background: "darkgray", padding: "20px" }}>
        <h3>All Customer Details</h3>
        <Table className="table table-striped" hover bordered>
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              <th>Customer Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Plan Package</th>
              <th>Plan Type</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phoneNo}</td>
                <td>{customer.planPackage}</td>
                <td>{customer.planType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default HomeMakerCustomers;
