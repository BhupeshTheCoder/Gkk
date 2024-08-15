import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import CustomerService from "../../service/CustomerService";
import { toast } from "react-toastify";
import HomeMakerService from "../../service/HomeMakerService";
import SessionService from "../../service/SessionService";
import { useNavigate } from "react-router-dom";

const CustomerHm = (props) => {
  const [homeMakers, setHomeMakers] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('All Cities');

  useEffect(() => {
    document.title = "Customer || HomeMaker";
    allHomeMakers();
    allCities();
  }, []);
 const history = useNavigate();
  const allHomeMakers = () => {
    CustomerService.getAllHomeMakers()
      .then((response) => {
        setHomeMakers(response.data.result);
      })
      .catch((error) => {
        toast.error("Something went wrong", { position: "bottom-center" });
      });
  };

  const allCities = () => {
    HomeMakerService.getAllCities()
      .then((response) => {
        setCities(response.data.result);
      })
      .catch((error) => {
        toast.error("Something went wrong", { position: "bottom-center" });
      });
  };

  const addHomeMaker = (homeMakerId) => {
    CustomerService.addHomeMaker(homeMakerId, SessionService.getCurrentUser().id)
      .then((response) => {
        HomeMakerService.getUser(homeMakerId).then((res) => {
          SessionService.storeHomeMaker(res.data.result);
          history('/customer/myHomeMaker');
        });
      })
      .catch((error) => {
        toast.error("Failed to add home maker", { position: "bottom-center" });
      });
  };

  const homeMakersByCity = (city) => {
    setSelectedCity(city);
    if (city !== 'All Cities') {
      HomeMakerService.homeMakersByCity(city)
        .then((response) => {
          setHomeMakers(response.data.result);
        })
        .catch((error) => {
          toast.error("Something went wrong", { position: "bottom-center" });
        });
    } else {
      allHomeMakers();
    }
  };

  return (
    <div className="text-center">
      <Container className="text-center" style={{ background: "darkgray" }}>
        <h3>Select your City:</h3>
        <select 
          id="myCity" 
          className="form-select selectpicker my-3 btn btn-dark"
          value={selectedCity}
          onChange={(e) => homeMakersByCity(e.target.value)}
        >
          <option value="All Cities">All Cities</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>

        <h1>All Home Makers: {selectedCity}</h1>

        <Table hover bordered>
          <thead style={{ background: "#333", color: "white" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {homeMakers.map((homeMaker, index) => (
              <tr key={index}>
                <td>{homeMaker.name}</td>
                <td>{homeMaker.email}</td>
                <td>{homeMaker.phoneNo}</td>
                <td>{homeMaker.city}</td>
                <td>
                  <button 
                    className="btn btn-success" 
                    onClick={() => addHomeMaker(homeMaker.id)}
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CustomerHm;
