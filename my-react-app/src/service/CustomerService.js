// import axios from 'axios';
// import Base_URL from "./Base_Url";
// import SessionService from './SessionService';

// const CUSTOMER_API_BASE_URL = `${Base_URL}/customer`;
// const HOMEMAKER_API_BASE_URL = `${Base_URL}/homeMaker`;
// axios.defaults.headers.common['Authorization'] = 'Bearer your-token';

// class CustomerService {

//     async authenticateUser(email, password) {
//         try {
//             const response = await axios.get(`${CUSTOMER_API_BASE_URL}/login/${email}/${password}`);
//             return response;
//         } catch (error) {
//             console.error('Error during authentication:', error);
//             throw error;
//         }
//     }

//     async addUser(user) {
//         try {
//             return await axios.post(`${CUSTOMER_API_BASE_URL}/signup`, user);
//         } catch (error) {
//             console.error('Error adding user:', error);
//             throw error;
//         }
//     }

//     async getAllHomeMakers() {
//         try {
//             return await axios.get(`${HOMEMAKER_API_BASE_URL}/get-all-home-makers`);
//         } catch (error) {
//             console.error('Error fetching home makers:', error);
//             throw error;
//         }
//     }

//     async deleteUser(userId) {
//         try {
//             return await axios.delete(`${CUSTOMER_API_BASE_URL}/deleteCustomer/${userId}`);
//         } catch (error) {
//             console.error('Error deleting user:', error);
//             throw error;
//         }
//     }

//     async updateUserDetails(user) {
//         try {
//             return await axios.put(`${CUSTOMER_API_BASE_URL}/updateUserDetails`, user);
//         } catch (error) {
//             console.error('Error updating user details:', error);
//             throw error;
//         }
//     }

//     async addHomeMaker(homeMakerId, custId) {
//         try {
//             return await axios.put(`${CUSTOMER_API_BASE_URL}/select-homeMaker/${homeMakerId}/${custId}`);
//         } catch (error) {
//             console.error('Error adding home maker:', error);
//             throw error;
//         }
//     }

//     async getMyHomeMaker(id) {
//         try {
//             return await axios.get(`${CUSTOMER_API_BASE_URL}/getMyHomeMaker`, { params: { id } });
//         } catch (error) {
//             console.error('Error fetching my home maker:', error);
//             throw error;
//         }
//     }

//     async removeMyHomeMaker(userId) {
//         try {
//             return await axios.delete(`${CUSTOMER_API_BASE_URL}/removeMyHomeMaker/${userId}`);
//         } catch (error) {
//             console.error('Error removing home maker:', error);
//             throw error;
//         }
//     }

//     async updatePackage(planType, pack) {
//         try {
//             const user = SessionService.getCurrentUser();
//             return await axios.put(`${CUSTOMER_API_BASE_URL}/updatePackage/${planType}/${pack}`, user);
//         } catch (error) {
//             console.error('Error updating package:', error);
//             throw error;
//         }
//     }

//     async getAllOrders(userId) {
//         try {
//             return await axios.get(`${CUSTOMER_API_BASE_URL}/getAllOrders/${userId}`);
//         } catch (error) {
//             console.error('Error fetching all orders:', error);
//             throw error;
//         }
//     }
// }

// export default new CustomerService();

import axios from 'axios';
import Base_URL from "./Base_Url"

import SessionService from './SessionService';

const CUSTOMER_API_BASE_URL = Base_URL+'/customer';

const HOMEMAKER_API_BASE_URL = Base_URL+'/homeMaker';

class CustomerService {

    authenticateUser(email, password){
        return axios.get(CUSTOMER_API_BASE_URL + '/login/' + email + '/' + password)
    }

    addUser(user){
        return axios.post(CUSTOMER_API_BASE_URL + '/signup/',user)
    }

    getAllHomeMakers(){
        return axios.get(HOMEMAKER_API_BASE_URL + "/get-all-home-makers")
    }

    deleteUser(userId) {
        return axios.delete(CUSTOMER_API_BASE_URL + '/deleteCustomer/' + userId);
    }

    updateUserDetails(user) {
        return axios.put(CUSTOMER_API_BASE_URL + '/updateUserDetails', user);
    }

    addHomeMaker(homeMakerId,custId){
        return axios.put(CUSTOMER_API_BASE_URL + '/select-homeMaker/' + homeMakerId+ '/' +custId)
    }

    getMyHomeMaker(id){
        return axios.get(CUSTOMER_API_BASE_URL + '/getMyHomeMaker/' + id)
    }

    removeMyHomeMaker(userId) {
        return axios.delete(CUSTOMER_API_BASE_URL + '/removeMyHomeMaker/' + userId)
    }

    updatePackage(planType,pack){
        return axios.put(CUSTOMER_API_BASE_URL+'/updatePackage/'+planType+'/'+pack,SessionService.getCurrentUser())
    }

    getAllOrders(userId){
        return axios.get(CUSTOMER_API_BASE_URL+'/getAllOrders/'+userId)
    }
}

export default new CustomerService();