import React, { useEffect, useState } from "react"
import { Jumbotron, Table } from "reactstrap"
import AdminService from "../../service/AdminService"
const AdminManageOrders = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    document.title = "Admin || Orders"
    getAllOrders()

  }, [])

  const getAllOrders = () => {
    AdminService.getAllOrders().then((response) => {
      console.log(response)
      setOrders(response.data)
    })
  }

  return (
    <div className="text-center">
      <Jumbotron className="text-center" style={{ background: "darkgray" }}>
        <h3>All Orders</h3>
        <p>You can manage orders here...</p>
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
            {
              orders &&
              orders.map((order,index) =>
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
              )
            }
          </tbody>
        </Table>

      </Jumbotron>
    </div>
  )
}
export default AdminManageOrders