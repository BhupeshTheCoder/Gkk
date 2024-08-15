import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Button, Card, Container, Form, FormGroup, Input } from "reactstrap";
import SessionService from "../../service/SessionService";
import HomeMakerService from "../../service/HomeMakerService";
import { useNavigate } from "react-router-dom";

const EditHomeMakerProfile = () => {
  const [role] = useState(SessionService.getRole());
  const [user, setUser] = useState({});
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Edit Profile";
    // Initializing/populating the state of the user
    setUser(SessionService.getCurrentUser());
  }, []);

  const updateUserDetails = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Verify user credentials
      const authResponse = await HomeMakerService.authenticateUser(user.email, password);

      if (authResponse.status === 204) {
        toast.warning("Status : " + authResponse.status + " Invalid Credentials!!!", { position: "bottom-center" });
        return;
      }

      // If verified, update user details
      const updateResponse = await HomeMakerService.updateUserDetails(user);
      toast.success("Profile Updated !!!", { position: "bottom-center" });
      SessionService.storeUser(updateResponse.data.result);
      navigate('/home-maker/profile'); // Navigate to the profile page or desired location

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "bottom-center" });
    }
  };

  return (
    <Card className="signup-form">
      <Form onSubmit={updateUserDetails}>
        <h3 className="text-center my-3 py-3">Edit {role} Profile</h3>

        <div className="form-row">
          <FormGroup className="form-col col-md-6">
            <Input
              type="text"
              placeholder="Enter email here"
              id="email"
              value={user.email}
              readOnly
            />
          </FormGroup>
          <FormGroup className="form-col col-md-6">
            <Input
              type="password"
              placeholder="Enter password here"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </div>

        <div className="form-row">
          <FormGroup className="form-col col-md-6">
            <Input
              type="text"
              placeholder="Enter name here"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </FormGroup>
          <FormGroup className="form-col col-md-6">
            <Input
              type="tel"
              placeholder="Enter phoneNo here"
              id="phoneNo"
              value={user.phoneNo}
              onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
            />
          </FormGroup>
        </div>

        <div className="form-row">
          <FormGroup className="form-col col-md-12">
            <Input
              type="text"
              placeholder="Enter primaryAddress here"
              id="primaryAddress"
              value={user.primaryAddress}
              onChange={(e) => setUser({ ...user, primaryAddress: e.target.value })}
            />
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="form-col col-md-3">
            <Input
              type="text"
              placeholder="Enter City here"
              id="city"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </FormGroup>
          <FormGroup className="form-col col-md-3">
            <Input
              type="text"
              placeholder="Enter State here"
              id="state"
              value={user.state}
              onChange={(e) => setUser({ ...user, state: e.target.value })}
            />
          </FormGroup>
          <FormGroup className="form-col col-md-3">
            <Input
              type="text"
              placeholder="Enter Country here"
              id="country"
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
            />
          </FormGroup>
          <FormGroup className="form-col col-md-3">
            <Input
              type="number"
              placeholder="Enter pincode here"
              id="pincode"
              value={user.pincode}
              onChange={(e) => setUser({ ...user, pincode: e.target.value })}
            />
          </FormGroup>
        </div>
        <Container>
          <Button type="submit" color="success" className="mr-3">Save Details</Button>
        </Container>
      </Form>
    </Card>
  );
};

export default EditHomeMakerProfile;
