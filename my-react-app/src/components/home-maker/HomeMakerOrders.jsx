import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import { toast } from "react-toastify";
import SessionService from "../../service/SessionService";
import HomeMakerService from "../../service/HomeMakerService";

const HomeMakerOrders = () => {
  const [user] = useState(SessionService.getCurrentUser());
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = "Home Maker || My Orders";

    const fetchOrders = async () => {
      try {
        const response = await HomeMakerService.getAllOrders(user.id);
        console.log(response);
        setOrders(response.data.result);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong", { position: "bottom-center" });
      }
    };

    fetchOrders();
  }, [user.id]);

  return (
    <Container className="text-center">
      <div className="text-center" style={{ background: "darkgray", padding: "20px" }}>
        <h3>All Orders:</h3>
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
      </div>
    </Container>
  );
};

export default HomeMakerOrders;
