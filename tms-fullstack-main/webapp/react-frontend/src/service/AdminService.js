import axios from 'axios';

import Base_URL from "./Base_Url"

const ADMIN_API_BASE_URL = Base_URL+'/admin';

class AdminService {

    authenticateUser(email, password){
        return axios.get(ADMIN_API_BASE_URL+ '/login/' + email + '/' + password)
    }

    getAllOrders(){
        return axios.get(ADMIN_API_BASE_URL+'/getAllOrders')
    }
}

export default new AdminService();