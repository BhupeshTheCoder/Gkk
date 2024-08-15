import React from 'react'

const Footer = () => {
    
        // <Navbar fixed="bottom">
        const styles = {
            footer: {
                backgroundColor: "#343a40",
                color: "#fff",
                padding: "20px 0",
                marginTop: "20px",
            },
            container: {
                maxWidth: "1100px",
                margin: "0 auto",
            },
            row: {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginBottom: "15px",
            },
            col: {
                flex: "1",
                minWidth: "200px",
                margin: "10px 0",
            },
            h5: {
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "15px",
            },
            ul: {
                listStyleType: "none",
                padding: "0",
            },
            li: {
                marginBottom: "10px",
                color: "#ccc",
                fontSize: "14px",
            },
            socialIcons: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            iconLink: {
                margin: "0 5px",
                textDecoration: "none",
            },
            iconImage: {
                width: "30px",
                height: "30px",
            },
            copyright: {
                textAlign: "center",
                color: "#ccc",
                fontSize: "14px",
                marginTop: "20px",
            },
        };
    
        return (
            <div style={styles.footer}>
                <div style={styles.container}>
                    <div style={styles.row}>
                        {/* Column 1*/}
                        <div style={styles.col}>
                            <h5 style={styles.h5}>Ghar Ka Khana</h5>
                            <ul style={styles.ul}>
                                <li style={styles.li}>+91-7000329812</li>
                                <li style={styles.li}>Paud Road, Kothrud</li>
                                <li style={styles.li}>Pune, INDIA</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div style={styles.col}>
                            <h5 style={styles.h5}>For Customers</h5>
                            <ul style={styles.ul}>
                                <li style={styles.li}>Code of Conduct</li>
                                <li style={styles.li}>Community</li>
                                <li style={styles.li}>Blogger Help</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div style={styles.col}>
                            <h5 style={styles.h5}>For Home Makers</h5>
                            <ul style={styles.ul}>
                                <li style={styles.li}>Claim your listing</li>
                                <li style={styles.li}>Business App</li>
                                <li style={styles.li}>Products for Businesses</li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div style={styles.col}>
                            <h5 style={styles.h5} className="mb-3">Connect With Us</h5>
                            <div style={styles.socialIcons}>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                                    <img src="/icons8-insta-48.png" alt="Instagram" style={styles.iconImage} />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                                    <img src="/icons8-fb-48.png" alt="Facebook" style={styles.iconImage} />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                                    <img src="/icons8-linkedin-48.png" alt="LinkedIn" style={styles.iconImage} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={styles.copyright}>
                        <p>
                            Copyright&copy; {new Date().getFullYear()} GHAR Ki Rasoi&trade; | GKR&reg; is a registered trademark of the Ghar ki Rasoi, Inc. | All Rights Reserved | Terms of Service | Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        // </Navbar>

    )
}

export default Footer;
