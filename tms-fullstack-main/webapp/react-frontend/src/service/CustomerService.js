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