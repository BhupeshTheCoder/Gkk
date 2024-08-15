import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import AdminService from "../../service/AdminService";
import { toast } from "react-toastify";

const AdminManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Admin || Orders";
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    AdminService.getAllOrders()
      .then((response) => {
        console.log(response);
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch orders", { position: "bottom-center" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="text-center">
      <Container className="text-center" style={{ background: "darkgray" }}>
        <h3>All Orders</h3>
        <p>You can manage orders here...</p>
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length > 0 ? (
          <Table hover bordered className="table table-striped">
            <thead style={{ background: "#333", color: "white" }}>
              <tr>
                <th>Order Id</th>
                <th>Payment Id</th>
                <th>Date:Time</th>
                <th>Receipt</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Cus Id</th>
                <th>HM Id</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
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
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No orders available.</p>
        )}
      </Container>
    </div>
  );
};

export default AdminManageOrders;
