import React from 'react'

const Footer = () => {
    return (
        // <Navbar fixed="bottom">
        <div className="main-footer my-1">
            <div className="container">
                <div className="row">
                    {/* Column 1*/}
                    <div className="col">
                        <h5>Maa Ki Rasoi</h5>
                        <ul className="list-unstyled">
                            <li>+91-9617641186</li>
                            <li>123 Baker Street, Nariman Point</li>
                            <li>Mumbai, INDIA</li>

                        </ul>

                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h5>For Customers</h5>
                        <ul className="list-unstyled">
                            <li>Code of Conduct</li>
                            <li>Community</li>
                            <li>Blogger Help</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <h5>For Home Makers</h5>
                        <ul className="list-unstyled">
                            <li>Claim your listing</li>
                            <li>Business App</li>
                            <li>Products for Businesses</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="col">
                        <h5 className="mb-3">Connect</h5>
                        <div className="row">
                        <div className="col" href="https://www.instagram.com/"><i className="fab fa-2x fa-instagram" /></div>
                        <div className="col" href="https://www.facebook.com/"><i className="fab fa-2x fa-facebook" /></div>
                        <div className="col" href="https://www.linkedin.com/"><i className="fab fa-2x fa-linkedin" /></div>
                        </div>
                    </div>
                </div>
                <div className="row" align="center">
                    <p className="col-sm">
                        Copyright&copy; {new Date().getFullYear()} MAA KI RASOI&trade; | MKR&reg; is a registered trademark of the Maa Ki Rasoi, Inc. | All Rights Reserved | Terms of Service | Privacy Policy
        </p>

                </div>
            </div>
        </div>
        // </Navbar>

    )
}

export default Footer;
