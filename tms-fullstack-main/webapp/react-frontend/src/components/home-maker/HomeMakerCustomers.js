import React, { useEffect, useState } from "react"
import { Jumbotron, Table } from "reactstrap"
import { toast } from "react-toastify"
import HomeMakerService from "../../service/HomeMakerService"
import SessionService from "../../service/SessionService"

const HomeMakerCustomers = () => {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    document.title = "Customer || HomeMaker"
  }, [])

  const myCustomers = () => {
    HomeMakerService.getMyCustomers(SessionService.getCurrentUser().id)
      .then((response) => {
        console.log(response)
        setCustomers(response.data.result)
      }, (error) => {
        // for error
        console.log(error)
        toast.error("something went wrong", { position: "bottom-center" })
      })
  }


  useEffect(() => {
    myCustomers()
  }, [])

  return (
    <div className="text-center">
      <Jumbotron className="text-center" style={{ background: "darkgray" }}>
        <h3>All Customer Details</h3>
        <Table className="table table-striped" hover bordered>
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              {/* <th className="hidden">Id</th> */}
              <th>Customer Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Plan Package</th>
              <th>Plan Type</th>
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
                  <td>{customer.planPackage}</td>
                  <td>{customer.planType}</td>
                </tr>
              )
            }
          </tbody>
        </Table>

      </Jumbotron>
    </div>
  )
}
export default HomeMakerCustomers