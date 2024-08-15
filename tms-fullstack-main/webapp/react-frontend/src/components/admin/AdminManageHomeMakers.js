import React, { useEffect, useState, } from "react"
import { Jumbotron, Table } from "reactstrap"
import CustomerService from "../../service/CustomerService"
import { toast } from "react-toastify"
import HomeMakerService from "../../service/HomeMakerService"

const AdminManageHomeMakers = () => {

  const [homeMakers, setHomeMakers] = useState([])
  const [reload, setReload] = useState(1)

  useEffect(() => {
    document.title = "Admin"
    allHomeMakers()
  }, [reload])

  const allHomeMakers = () => {
    CustomerService.getAllHomeMakers()
      .then((response) => {
        console.log(response)
        setHomeMakers(response.data.result)
      }, (error) => {
        // for error
        console.log(error)
        toast.error("something went wrong", { position: "bottom-center" })
      })
  }

  const removeHomeMaker = (hmId) => {
    console.log(hmId)
    HomeMakerService.deleteUser(hmId).then(response => {
      toast.success(response.data.result, { position: "bottom-center" })
      setReload(reload + 1)
      console.log(reload)
    })
  }

  return (
    <div className="text-center">
      <Jumbotron className="text-center" style={{ background: "darkgray" }}>
        <h3>All Home Makers</h3>
        <p>Manage home makers here...</p>
        <Table hover bordered>
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              <th>HM Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              homeMakers.map((homeMaker,index) =>
                <tr key={index}>
                  <td>{homeMaker.id}</td>
                  <td>{homeMaker.name}</td>
                  <td>{homeMaker.email}</td>
                  <td>{homeMaker.phoneNo}</td>
                  <td>{homeMaker.city}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeHomeMaker(homeMaker.id)}> Remove</button>
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
export default AdminManageHomeMakers