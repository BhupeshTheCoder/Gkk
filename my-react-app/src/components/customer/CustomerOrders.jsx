import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import CustomerService from "../../service/CustomerService";
import { toast } from "react-toastify";
import SessionService from "../../service/SessionService";

const CustomerOrders = () => {
  const [user] = useState(SessionService.getCurrentUser());
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = "Customer || My Orders";
    CustomerService.getAllOrders(user.id)
      .then((response) => {
        setOrders(response.data.result);
      })
      .catch((error) => {
        toast.error("Something went wrong", { position: "bottom-center" });
      });
  }, [user]);

  return (
    <div className="text-center">
      <div className="text-center" style={{ background: "darkgray", padding: "20px" }}>
        <h3>All Orders :</h3>
        <Table hover bordered className="table table-striped">
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              <th>Order Id</th>
              <th>Payment Id</th>
              <th>Date:Time</th>
              <th>Receipt</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Customer Id</th>
              <th>Home Maker Id</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.orderId}</td>
                  <td>{order.paymentId}</td>
                  <td>{order.dateTime}</td>
                  <td>{order.receipt}</td>
                  <td>{order.amount / 100}</td>
                  <td>{order.status}</td>
                  <td>{order.customerId}</td>
                  <td>{order.homeMakerId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No orders found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerOrders;
