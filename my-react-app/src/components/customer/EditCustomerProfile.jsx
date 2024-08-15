import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Button, Card, Container, Form, FormGroup, Input } from "reactstrap";
import SessionService from "../../service/SessionService";
import CustomerService from "../../service/CustomerService";
import { useNavigate } from "react-router-dom";

const EditCustomerProfile = () => {
  const [role] = useState(SessionService.getRole());
  const [user, setUser] = useState({});
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Edit Profile";
    // Initializing/populating the state of the user
    setUser(SessionService.getCurrentUser());
  }, []);

  const updateUserDetails = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Before updating the details, verify the password
    CustomerService.authenticateUser(user.email, password)
      .then((response) => {
        if (response.status === 204) {
          toast.warning("Status : " + response.status + " Invalid Credentials!!!", { position: "bottom-center" });
        } else {
          setIsVerified(true);
        }
      })
      .catch(error => {
        console.log(error);
        toast.error("Error verifying credentials", { position: "bottom-center" });
      });
    
    // Only update user details if verified
    if (isVerified) {
      CustomerService.updateUserDetails(user)
        .then((response) => {
          toast.success("Profile Updated !!!", { position: "bottom-center" });
          SessionService.storeUser(response.data.result);
          navigate('/customer/profile'); // Navigate to profile page or desired location
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong", { position: "bottom-center" });
        });
    }
  };

  return (
    <Card className="signup-form" style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
  <Form onSubmit={updateUserDetails}>
    <h3 className="text-center my-3 py-3" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Edit {role} Profile</h3>
    <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <FormGroup className="form-col col-md-6" style={{ padding: '0 10px' }}>
        <Input
          type="text"
          placeholder="Enter email here"
          id="email"
          value={user.email}
          readOnly
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
      <FormGroup className="form-col col-md-6" style={{ padding: '0 10px' }}>
        <Input
          type="password"
          placeholder="Enter password here"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
    </div>
    <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <FormGroup className="form-col col-md-6" style={{ padding: '0 10px' }}>
        <Input
          type="text"
          placeholder="Enter name here"
          id="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
      <FormGroup className="form-col col-md-6" style={{ padding: '0 10px' }}>
        <Input
          type="tel"
          placeholder="Enter phoneNo here"
          id="phoneNo"
          value={user.phoneNo}
          onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
    </div>
    <div className="form-row" style={{ marginBottom: '15px' }}>
      <FormGroup className="form-col col-md-12" style={{ padding: '0 10px' }}>
        <Input
          type="text"
          placeholder="Enter primaryAddress here"
          id="primaryAddress"
          value={user.primaryAddress}
          onChange={(e) => setUser({ ...user, primaryAddress: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
    </div>
    <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <FormGroup className="form-col col-md-3" style={{ padding: '0 10px' }}>
        <Input
          type="text"
          placeholder="Enter City here"
          id="city"
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
      <FormGroup className="form-col col-md-3" style={{ padding: '0 10px' }}>
        <Input
          type="text"
          placeholder="Enter State here"
          id="state"
          value={user.state}
          onChange={(e) => setUser({ ...user, state: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
      <FormGroup className="form-col col-md-3" style={{ padding: '0 10px' }}>
        <Input
          type="text"
          placeholder="Enter Country here"
          id="country"
          value={user.country}
          onChange={(e) => setUser({ ...user, country: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
      <FormGroup className="form-col col-md-3" style={{ padding: '0 10px' }}>
        <Input
          type="number"
          placeholder="Enter pincode here"
          id="pincode"
          value={user.pincode}
          onChange={(e) => setUser({ ...user, pincode: e.target.value })}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </FormGroup>
    </div>
    <Container className="text-center" style={{ marginTop: '20px' }}>
      <Button type="submit" color="success" style={{ padding: '10px 20px', borderRadius: '5px', fontSize: '16px' }}>
        Save Details
      </Button>
    </Container>
  </Form>
</Card>

  );
};

export default EditCustomerProfile;
