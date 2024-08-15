import React, { useEffect, useState } from "react"
import { Jumbotron, Table } from "reactstrap"
import { toast } from "react-toastify"
import HomeMakerService from "../../service/HomeMakerService"
import CustomerService from "../../service/CustomerService"


const AdminManageCustomers = () => {

  const [customers, setCustomers] = useState([])
  const [reload, setReload] = useState(1)
  useEffect(() => {
    document.title = "Admin || Customer"
    allCustomers()
  }, [reload])

  const allCustomers = () => {
    HomeMakerService.getAllCustomers()
      .then((response) => {
        console.log(response)
        setCustomers(response.data.result)
      }, (error) => {
        // for error
        console.log(error)
        toast.error("something went wrong", { position: "bottom-center" })
      })
  }


  const removeCustomer = (custId) => {
    console.log(custId)
    CustomerService.deleteUser(custId).then(response => {
      toast.success(response.data.result, { position: "bottom-center" })
      setReload(reload + 1)
      console.log(reload)
    })
  }

  return (
    <div className="text-center">
      <Jumbotron className="text-center" style={{ background: "darkgray" }}>
        <h3>All Customers</h3>
        <p>You can manage customers here...</p>
        <Table hover bordered>
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              <th>Cus ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, index) =>
                <tr key={index}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNo}</td>
                  <td>{customer.city}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeCustomer(customer.id)}> Remove</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>

      </Jumbotron>
    </div>
  )
}
export default AdminManageCustomers