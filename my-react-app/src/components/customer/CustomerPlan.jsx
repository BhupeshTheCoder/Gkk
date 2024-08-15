import React, { useState } from "react";
import { Card, Button, CardImg, CardTitle, CardColumns, CardSubtitle, CardBody } from "reactstrap";
import SessionService from "../../service/SessionService";
import CustomerService from "../../service/CustomerService";
import { useNavigate } from "react-router-dom";

const CustomerPlan = () => {
  const [user, setUser] = useState(SessionService.getCurrentUser());
  const navigate = useNavigate();

  const buttonHandle = (pack, price) => {
    const e = document.getElementById("plan-type");
    const planType = e.options[e.selectedIndex].value;
    CustomerService.updatePackage(planType, pack).then((response) => {
      SessionService.storeUser(response.data.result);
      setUser(SessionService.getCurrentUser());
    }).catch((error) => {
      console.error("Error updating package:", error);
    });

    SessionService.setPrice(price);
    navigate("/payment");
  };

  return (
    <div className="text-center">
      <div className="text-center" style={{ backgroundColor: '#333', padding: '20px' }}>
        {user.planType &&
          <h2 style={{ color: 'white' }}>
            Your selected plan: {user.planType} and package: {user.planPackage}
          </h2>
        }
        <div>
          <h2 style={{ color: "white" }}>Select/Change Your Plan</h2>
          <p style={{ color: "white" }}>You can manage your Plans here...</p>

          <select className="form-select selectpicker my-3 btn btn-info" aria-label="Default select example" id="plan-type">
            <option defaultValue value="VEG">Veg</option>
            <option value="NON_VEG">Non-veg</option>
          </select>

          <CardColumns>
            <Card>
              <CardImg top width="100%" height="250px" src="https://i.pinimg.com/originals/5f/8d/e8/5f8de8ccdf8c63c081347690ce87b3ce.png" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Mini Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Curb Instant Cravings</CardSubtitle>
                <Button className="btn-info" onClick={() => buttonHandle("MINI", 1800)}>&#8377;1800</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" height="250px" src="https://i.pinimg.com/originals/d4/30/1c/d4301c6b1ff43529fd646fe49166e9e1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Classic Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 2 - A Proper Home-Cooked Delicacy</CardSubtitle>
                <Button className="btn-info" onClick={() => buttonHandle("CLASSIC", 2400)}>&#8377;2400</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" height="250px" src="https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Jumbo Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 4 - Sharing Is Caring</CardSubtitle>
                <Button className="btn-info" onClick={() => buttonHandle("JUMBO", 3000)}>&#8377;3000</Button>
              </CardBody>
            </Card>
          </CardColumns>
        </div>
      </div>
    </div>
  );
};

export default CustomerPlan;
