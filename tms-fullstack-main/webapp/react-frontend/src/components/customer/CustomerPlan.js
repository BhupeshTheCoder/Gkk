import React, {useState } from "react"
import {
  Jumbotron, Card, Button, CardImg, CardTitle, CardDeck,
  CardSubtitle, CardBody
} from "reactstrap"
import SessionService from "../../service/SessionService"
import CustomerService from "../../service/CustomerService"

const CustomerPlan = (props) => {

  const [user, setUser] = useState(SessionService.getCurrentUser)

  const buttonHandle = (pack, price) => {
    var e = document.getElementById("plan-type")
    var planType = e.options[e.selectedIndex].value;
    console.log(planType)
    console.log(pack)
    console.log(price)
    CustomerService.updatePackage(planType, pack).then((response) => {
      console.log(response)
      SessionService.storeUser(response.data.result)
      setUser(SessionService.getCurrentUser())
      console.log(SessionService.getCurrentUser().planType)
    })

    // stored price in session storage
    SessionService.setPrice(price)
    props.history.push("/payment")

  }
  return (
    <div className="text-center">
      <Jumbotron className="text-center" style={{ backgroundColor: '#333' }}>
        {
          user.planType &&
          <h2 style={{ color: 'white' }}> Your selected plan : {user.planType} and package : {user.planPackage}</h2>
        }
        <div>
          <h2 style={{ color: "white" }}>Select/Change Your Plan</h2>
          <p style={{ color: "white" }}>You can manage your Plans here...</p>

          <select className="form-select selectpicker my-3 btn btn-info" aria-label="Default select example " id="plan-type"  >
            <option defaultValue value="VEG">Veg</option>
            <option value="NON_VEG">Non-veg</option>
          </select>

          <CardDeck>
            <Card>
              <CardImg top width="100%" height="250px" src="https://i.pinimg.com/originals/5f/8d/e8/5f8de8ccdf8c63c081347690ce87b3ce.png" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Mini Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Curb Instant Cravings</CardSubtitle>
                {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
                <Button className="btn-info" onClick={() => buttonHandle("MINI", 1800)}>&#8377;1800</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" height="250px" src="https://i.pinimg.com/originals/d4/30/1c/d4301c6b1ff43529fd646fe49166e9e1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Classic Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 2 - A Proper Home-Cooked Delicacy</CardSubtitle>
                {/* <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText> */}
                <Button className="btn-info" onClick={() => buttonHandle("CLASSIC", 2400)}>&#8377;2400</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" height="250px" src="https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Jumbo Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 4 - Sharing Is Caring</CardSubtitle>
                {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText> */}
                <Button className="btn-info" onClick={() => buttonHandle("JUMBO", 3000)}>&#8377;3000</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </Jumbotron>
    </div>
  )



}

export default CustomerPlan