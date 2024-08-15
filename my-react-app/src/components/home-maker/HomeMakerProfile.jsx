import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardTitle, CardSubtitle, CardBody, Media, Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import SessionService from "../../service/SessionService";

const HomeMakerProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HomeMaker || Profile";
    setUser(SessionService.getCurrentUser()); // Ensure this returns the user object
  }, []);

  const editProfile = () => {
    navigate('/homeMaker/edit-profile');
  };

  return (
    <Container className="text-center">
  <div style={{ backgroundColor: 'Darkgray', padding: '20px', borderRadius: '8px' }}>
    <Button className="btn-info float-right" onClick={editProfile} style={{ marginBottom: '20px' }}>
      Edit Profile
    </Button>

    <Media style={{ marginBottom: '20px' }}>
      <Media left>
        <Media object src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/64/User-blue-icon.png" alt="Profile" style={{ width: '64px', height: '64px' }} />
      </Media>
      <Media body>
        <h1>Welcome {user.name}</h1>
      </Media>
    </Media>

    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
      <Card style={{ flex: '1', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px' }}>
        <CardImg top width="100%" src="https://icons.iconarchive.com/icons/aha-soft/large-business/256/Two-storied-house-icon.png" alt="Address" style={{ borderRadius: '8px 8px 0 0' }} />
        <CardBody>
          <CardTitle tag="h5">ADDRESS</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{user.primaryAddress}</CardSubtitle>
        </CardBody>
      </Card>
      <Card style={{ flex: '1', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px' }}>
        <CardImg top width="100%" src="https://icons.iconarchive.com/icons/dario-arnaez/genesis-3G/256/Emails-Folder-icon.png" alt="Email" style={{ borderRadius: '8px 8px 0 0' }} />
        <CardBody>
          <CardTitle tag="h5">EMAIL ADDRESS</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{user.email}</CardSubtitle>
        </CardBody>
      </Card>
      <Card style={{ flex: '1', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px' }}>
        <CardImg top width="100%" src="https://icons.iconarchive.com/icons/iconshock/real-vista-networking/256/phone-icon.png" alt="Phone" style={{ borderRadius: '8px 8px 0 0' }} />
        <CardBody>
          <CardTitle tag="h5">PHONE NUMBER</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{user.phoneNo}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  </div>
</Container>

  );
};

export default HomeMakerProfile;
