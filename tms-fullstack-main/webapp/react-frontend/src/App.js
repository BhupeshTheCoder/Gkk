import './App.css';
import { useEffect, useState } from "react"
import { Container } from "reactstrap"
import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import SessionService from "./service/SessionService"

import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Login from './components/Login'
import Signup from './components/Signup'
import User from './components/User'


function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    setUser(SessionService.getCurrentUser()) 
  }, [])


  return (
    <div className="text-center" style={{ background: "lightgray" }}>
      <Router>
        <ToastContainer />
        <Container>
          <Route path="/" component={Header} />
          {
            user && <Route path="/user" component={User} />
          }
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/aboutUs" component={AboutUs} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App
