import React, { useEffect } from "react";
import { Jumbotron, CardDeck, Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap"
import {
  UncontrolledCarousel,
} from 'reactstrap';

const Home = () =>{
    useEffect(() => {
        document.title = "Home || MKR"
    }, [])

    const items = [
      {
        src: 'https://www.krishnaangiraphotography.com/img/indian-food-1.jpg',
        altText: 'Slide 1',
        caption: 'This is a Tiffin Management System that tends to provide Tiffin Services to the Customers (Bachelors) and simultaneously provide Employment to the Homemakers.',
        header: 'MAA KI RASOI',
        key: '1'
      },
      {
        src: 'https://www.krishnaangiraphotography.com/img/indian-food-6.jpg',
        altText: 'Slide 2',
        caption: '',
        header: 'Craving mitigations for Bachelors in a budget',
        key: '2'
      },
      {
        src: 'https://www.krishnaangiraphotography.com/img/indian-food-5.jpg',
        altText: 'Slide 3',
        caption: '',
        header: 'Employment to Home Makers',
        key: '3'
      }
    ]
    
    return(
        <div>
          <Jumbotron style={{backgroundColor: '#333'}} className="text-center">
           
               <h1 style={{color: 'white'}}>Welcome to Maa Ki Rasoi</h1>
               {/* <p>This is a Tiffin Management System 
                   that tends to provide Tiffin Services to the Customers (Bachelors) 
                   and simultaneously provide Employment to the Homemakers.</p> */}

            <UncontrolledCarousel items={items} />
            <br />
            <CardDeck>
              <Card>
                <CardImg top width="100%" height="400px" src="https://i.pinimg.com/originals/5f/8d/e8/5f8de8ccdf8c63c081347690ce87b3ce.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Mini Package</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 1 - Now, No Need to Succumb to Instant Cravings</CardSubtitle>
                  <CardText></CardText>
                  {/* <Button>Button</Button> */}
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" height="400px" src="https://i.pinimg.com/originals/d4/30/1c/d4301c6b1ff43529fd646fe49166e9e1.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Classic Package</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 2 - A Proper Home-Cooked Delicacy</CardSubtitle>
                  <CardText></CardText>
                  {/* <Button>Button</Button> */}
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" height="400px" src="https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">Jumbo Package</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Serves 4 - Sharing Is Caring</CardSubtitle>
                  <CardText></CardText>
                  {/* <Button>Button</Button> */}
                </CardBody>
              </Card>
            </CardDeck>
          </Jumbotron>
        </div>
    )
}
export default Home