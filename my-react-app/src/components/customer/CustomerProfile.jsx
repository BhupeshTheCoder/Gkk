import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardTitle, CardSubtitle, CardBody, Media } from 'reactstrap';
import SessionService from "../../service/SessionService";
import { useNavigate } from "react-router-dom";

const CustomerProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Customer || Profile";
    const loggedInUser = SessionService.getCurrentUser(); // Make sure to call it as a function
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const editProfile = () => {
    navigate('/customer/edit-profile');
  };

  return (
    <div>
  <div style={{ background: 'darkgray', padding: '20px', textAlign: 'center' }}>
    <div>
      <Button className="btn-info float-end" onClick={editProfile}>
        Edit Profile
      </Button>
    </div>
    <Media>
      <Media left>
        <Media src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/64/User-blue-icon.png" alt="User icon" />
      </Media>
      <Media body>
        <Media heading>
          <h1>Welcome {user.name}</h1>
        </Media>
      </Media>
    </Media>
    <br />
    <div className="row">
      <div className="col-md-4">
        <Card>
          <CardImg top width="100%" src="https://icons.iconarchive.com/icons/aha-soft/large-business/256/Two-storied-house-icon.png" alt="Address icon" />
          <CardBody>
            <CardTitle tag="h5">ADDRESS</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{user.primaryAddress}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <CardImg top width="100%" src="https://icons.iconarchive.com/icons/dario-arnaez/genesis-3G/256/Emails-Folder-icon.png" alt="Email icon" />
          <CardBody>
            <CardTitle tag="h5">EMAIL ADDRESS</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{user.email}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <CardImg top width="100%" src="https://icons.iconarchive.com/icons/iconshock/real-vista-networking/256/phone-icon.png" alt="Phone icon" />
          <CardBody>
            <CardTitle tag="h5">PHONE NUMBER</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{user.phoneNo}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
</div>

  );
};

export default CustomerProfile;
