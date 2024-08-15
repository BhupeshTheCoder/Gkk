import React, { useEffect } from "react"
import { Container, Card, CardImg, CardText, CardImgOverlay, Row, Col } from "reactstrap"

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us || GKK"
  }, [])

  return (
    <div>
      <Container style={{ backgroundColor: '#333', padding: '2rem', color: 'white' }}>
        <h2 className="text-center">-: ABOUT US :-</h2>
        <br />
        <br />
        <Card inverse>
          <CardImg width="100%" src="https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg" alt="Card image cap" />
          <CardImgOverlay>
            <CardText tag="h4">
              The purpose of our application is to create a platform which provides an opportunity to the local-area homemakers to start their own Tiffin Services while ensuring the local-area bachelors diminish their hunger on a budget.
              <br /><br />
              The users of our web-application will need to create an account as a customer to avail Tiffin Services based on the availability of the Homemaker in the respective locality.
              <br /><br />
              Customers can navigate through different categories of food items as per their choice.
              <br /><br />
              A payment functionality will be built in to allow the use of credit cards, debit cards or COD for customers.
            </CardText>
          </CardImgOverlay>
        </Card>
        <br />
        <br />
        <p className="text-center"> -----------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <br />
        <h2 className="text-center">-: CONTACT US :-</h2>
        <br />

        <Row>
          {/* First Card */}
          <Col xs="12" md="4" className="my-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {/* <img id="img" width="100%" height="100%" src="" alt="Avatar" /> */}
                </div>
                <div className="flip-card-back">
                  <h5 className="mt-2">Bhupesh Verma</h5>
                  <p className="mb-2 text-muted">Business Partner</p>
                  <p>Phone: +91-8770050782</p>
                  <p>Email: Bhupesh.verma@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Second Card */}
          <Col xs="12" md="4" className="my-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {/* <img id="img" width="100%" height="100%" src="" alt="Avatar" /> */}
                </div>
                <div className="flip-card-back">
                  <h5 className="mt-2">Pranav Keshware</h5>
                  <p className="mb-2 text-muted">Business Partner</p>
                  <p>Phone: +91-7000329812</p>
                  <p>Email: panditkeshware@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Third Card */}
          <Col xs="12" md="4" className="my-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {/* <img id="img" width="100%" height="100%" src="" alt="Avatar" /> */}
                </div>
                <div className="flip-card-back">
                  <h5 className="mt-2">Gaikwad Vaibhav</h5>
                  <p className="mb-2 text-muted">Business Partner</p>
                  <p>Phone: +91-9325454139</p>
                  <p>Email: gaikwadvaibhav424@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs;
