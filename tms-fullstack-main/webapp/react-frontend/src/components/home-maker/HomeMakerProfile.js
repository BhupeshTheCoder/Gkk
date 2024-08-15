import React, { useEffect, useState } from "react"
import { Jumbotron } from "reactstrap"
import {
    Card, Button, CardImg, CardTitle, CardDeck,
    CardSubtitle, CardBody, Media
  } from 'reactstrap';
import SessionService from "../../service/SessionService";

const HomeMakerProfile = (props) =>{

    const [user] = useState(SessionService.getCurrentUser)

    useEffect(() => {
        document.title = "HomeMaker || Profile"
    }, [])

    const editProfile = () =>{
        props.history.push('/homeMaker/edit-profile')
        }

    return(
        <div>

<Jumbotron style={{backgroundColor: 'Darkgray'}} className="text-center">
<div>
               <Button className="btn-info float-right" onClick={editProfile}>
                   Edit Profile
               </Button>
               </div>

    <Media>
      <Media left>
        <Media src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/64/User-blue-icon.png" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
        <h1>Welcome {user.name}</h1>
        </Media>
      </Media>
    </Media>
           

    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://icons.iconarchive.com/icons/aha-soft/large-business/256/Two-storied-house-icon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">ADDRESS</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{user.primaryAddress}</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://icons.iconarchive.com/icons/dario-arnaez/genesis-3G/256/Emails-Folder-icon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">EMAIL ADDRESS</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{user.email}</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://icons.iconarchive.com/icons/iconshock/real-vista-networking/256/phone-icon.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">PHONE NUMBER</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{user.phoneNo}</CardSubtitle>
        </CardBody>
      </Card>
    </CardDeck>

           </Jumbotron>
        </div>
    )
}
export default HomeMakerProfile