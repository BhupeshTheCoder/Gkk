import React, { useEffect, useState } from "react"
import { Jumbotron, Table } from "reactstrap"
import CustomerService from "../../service/CustomerService"
import { toast } from "react-toastify"
import HomeMakerService from "../../service/HomeMakerService"
import SessionService from "../../service/SessionService"
import $ from 'jquery'; 

const CustomerHm = (props) => {

  const [homeMakers, setHomeMakers] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    document.title = "Customer || HomeMaker"
  }, [])

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

  useEffect(() => {
    allHomeMakers()
    allCities()
  }, [])


  const allCities = () => {
    HomeMakerService.getAllCities()
      .then((response) => {
        console.log(response)
        setCities(response.data.result)
      }, (error) => {
        // for error
        console.log(error)
        toast.error("something went wrong", { position: "bottom-center" })
      })
  }

  const addHomeMaker = (homeMakerId) => {

    console.log(homeMakerId)
    //this method is for update
    CustomerService.addHomeMaker(homeMakerId, SessionService.getCurrentUser().id).then((response) => {
      console.log(response.data.result)
      HomeMakerService.getUser(homeMakerId).then((res) => {
        console.log(res.data.result)
        SessionService.storeHomeMaker(res.data.result)
        props.history.push('/customer/myHomeMaker')
      })
    })
  }

 

  //Showing homeMaker by City
  const homeMakersByCity = (city) => {
    if(city !== 'All Cities'){
      HomeMakerService.homeMakersByCity(city)
      .then((response) => {
        console.log(response)
        setHomeMakers(response.data.result)
      }, (error) => {
        // for error
        console.log(error)
        toast.error("something went wrong", { position: "bottom-center" })
      })
    }
    else{
      allHomeMakers()
    }
  }

  return (
    <div className="text-center">
      <Jumbotron className="text-center" style={{ background: "darkgray" }}>

        <h3>Select your City : </h3>
        <select id="myCity" className="form-select selectpicker my-3 btn btn-dark" onChange={
          (e) => {
            homeMakersByCity(e.target.value)
          }
        }>
          <option value="All Cities">All Cities</option>
          {
            cities.map((city,index) =>
              <option key={index} value={city}>{city}</option>
            )
          }
        </select>

        <h1>All Home Makers : {$('#myCity').find(":selected").val()}</h1>

        <Table hover bordered>
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              {/* <th className="hidden">Id</th> */}
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
                  <td>{homeMaker.name}</td>
                  <td>{homeMaker.email}</td>
                  <td>{homeMaker.phoneNo}</td>
                  <td>{homeMaker.city}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => {
                      addHomeMaker(homeMaker.id)
                    }}> Select</button>
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
export default CustomerHm