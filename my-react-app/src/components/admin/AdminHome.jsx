import React, { useEffect, useState } from "react";
import { Container, Media, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import SessionService from "../../service/SessionService";

const AdminHome = () => {

  const [user] = useState(SessionService.getCurrentUser());

  useEffect(() => {
    document.title = "Admin || Home";
  }, []);

  return (
    <div>
    <Container
      fluid
      style={{
        background: 'darkgray',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
      }}
    >
      <Media className="d-flex align-items-center">
        <Media left>
          <Media
            src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/64/User-blue-icon.png"
            alt="User icon"
          />
        </Media>
        <Media body className="ml-3">
          <h2>Welcome {user.name}</h2>
        </Media>
      </Media>
      <br />
      <Row className="justify-content-center">
        <Col md="4">
          <Card>
            <CardImg
              top
              height="200px"
              width="300px"
              src="https://icons.iconarchive.com/icons/dario-arnaez/genesis-3G/256/Emails-Folder-icon.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">EMAIL ADDRESS</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {user.email}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardImg
              top
              height="200px"
              width="300px"
              src="https://icons.iconarchive.com/icons/iconshock/real-vista-networking/256/phone-icon.png"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">PHONE NUMBER</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {user.phoneNo}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default AdminHome;
