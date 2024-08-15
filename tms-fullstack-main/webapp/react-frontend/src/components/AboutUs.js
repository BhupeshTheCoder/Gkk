import React, { useEffect } from "react"
import { Jumbotron, Card, CardImg, CardText, CardImgOverlay } from "reactstrap"
const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us || MKR"
  }, [])
  return (
    <div>
      <Jumbotron style={{ backgroundColor: '#333' }} className="text-center">
        <h2 style={{ color: 'white' }}>-: ABOUT US :-</h2>
        <br />
        <br />
        <Card inverse>
          <CardImg width="100%" src="https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg" alt="Card image cap" />
          <CardImgOverlay>
            {/* <CardTitle tag="h1">About Us</CardTitle> */}
            <CardText tag="h4">
              The purpose of our application is to create a platform which provides an opportunity to the local-area homemakers to start their own Tiffin Services while ensuring the local-area bachelors diminish their hunger on a budget.

              The users of our web-application will need to create an account as a customer to avail Tiffin Services based on the availability of the Homemaker in the respective locality.

              Customers can navigate through different categories of food items as per their choice.

              A payment functionality will be built in to allow the use of credit cards, debit cards or COD for customers.
            </CardText>
          </CardImgOverlay>
        </Card>
        <br />
        <br />
        <p style={{ color: 'white' }}> -----------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        < br />
        <h2 style={{ color: 'white' }}>-: CONTACT US :-</h2>
        <br />

        <div className="fluid-container row">
          {/* First Card */}
          <div className="fluid-container flip-card col-4 my-2">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img id="img" width="100%" height="100%" src="https://media-exp1.licdn.com/dms/image/C5103AQGH5IY-rRRsPQ/profile-displayphoto-shrink_800_800/0/1530166383419?e=1622073600&v=beta&t=ZpvzMd6D6VTyIEQyAfwUOByOcvcJgwXF9Zd21Hw_p4g" alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h5 className="mt-2">VIPLAV SIRSIKAR</h5>
                <p className="mb-2 text-muted">Business Partner</p>
                <p>Phone: +91-9753134989</p>
                <p>Email: viplavsirikar22@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="fluid-container flip-card col-4 my-2">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img id="img" width="100%" height="100%" src="https://media-exp1.licdn.com/dms/image/C4E03AQGPe1m4aWJsDQ/profile-displayphoto-shrink_800_800/0/1614354754787?e=1622073600&v=beta&t=90o5UiSTq2JLEXnJgTbPtuZNFncx6lTCSok33lAfwjA" alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h5 className="mt-2">NINAD RAJE</h5>
                <p className="mb-2 text-muted">Business Partner</p>
                <p>Phone: +91-9109035345</p>
                <p>Email: ninadraje19298@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="fluid-container flip-card col-4 my-2">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img id="img" width="100%" height="100%" src="https://media-exp1.licdn.com/dms/image/C4E03AQGW9wgETyi4pA/profile-displayphoto-shrink_800_800/0/1616747268647?e=1622073600&v=beta&t=JyYiogFuGqQF45A49Rh5gsE9c7yxX3ydqzIH8qcNIE8" alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h5 className="mt-2">AKHLESH GOUR</h5>
                <p className="mb-2 text-muted">Business Partner</p>
                <p>Phone: +91-9907220333</p>
                <p>Email: akhlesh95@gmailcom</p>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="fluid-container flip-card col-4 my-2">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img id="img" width="100%" height="100%" src="https://media-exp1.licdn.com/dms/image/C4E03AQELewH9OBKB8A/profile-displayphoto-shrink_800_800/0/1616395564920?e=1622073600&v=beta&t=nfMZtrYkb5xgl0uRBmMfdrfMxMfHzu9iW49yRR_wqmY" alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h5 className="mt-2">ANAND SRIVASTAVA</h5>
                <p className="mb-2 text-muted">Business Partner</p>
                <p>Phone: +91-7723005159</p>
                <p>Email: anandshrivastava0007@gmailcom</p>
              </div>
            </div>
          </div>
          {/* Fifth Card */}
          <div className="fluid-container flip-card col-4 my-2">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img id="img" width="100%" height="100%" src="https://media-exp1.licdn.com/dms/image/C5103AQGVSMX-6-uPyQ/profile-displayphoto-shrink_800_800/0/1542785912198?e=1622073600&v=beta&t=wrM_R1CjgHBlAo50UnVFYR7qcY3uBPP7ArRIAc5epRs" alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h5 className="mt-2">PRASAD TULAPURKAR</h5>
                <p className="mb-2 text-muted">Business Partner</p>
                <p>Phone: +91-9617641186</p>
                <p>Email: prasadtulapurkar95@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}
export default AboutUs