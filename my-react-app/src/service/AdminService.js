// import axios from 'axios';
// import Base_URL from "./Base_Url";

// const ADMIN_API_BASE_URL = `${Base_URL}/admin`;

// class AdminService {

//     // Authentication with GET request
//     authenticateUser(email, password) {
//         return axios.get(`${ADMIN_API_BASE_URL}/login`, {
//             params: { email, password }
//         })
//         .then(response => response.data)
//         .catch(error => {
//             console.error('Authentication error:', error);
//             throw error;
//         });
//     }

//     // Fetch all orders
//     getAllOrders() {
//         return axios.get(`${ADMIN_API_BASE_URL}/getAllOrders`)
//             .then(response => response.data)
//             .catch(error => {
//                 console.error('Error fetching orders:', error);
//                 throw error;
//             });
//     }
// }

// const adminServiceInstance = new AdminService();
// export default adminServiceInstance;

import axios from 'axios';
import Base_URL from "./Base_Url";

const ADMIN_API_BASE_URL = `${Base_URL}/admin`;

class AdminService {

    // Method to authenticate user with email and password
    authenticateUser(email, password) {
        return axios.get(`${ADMIN_API_BASE_URL}/login/${email}/${password}`);
    }

    // Method to get all orders
    getAllOrders() {
        return axios.get(`${ADMIN_API_BASE_URL}/getAllOrders`);
    }
}

export default new AdminService();
