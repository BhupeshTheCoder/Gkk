import axios from 'axios';
import Base_URL from "./Base_Url";

const HOMEMAKER_API_BASE_URL = `${Base_URL}/homeMaker`;
const CUSTOMER_API_BASE_URL = `${Base_URL}/customer`;

class HomeMakerService {

    async authenticateUser(email, password) {
        try {
            return await axios.get(`${HOMEMAKER_API_BASE_URL}/login/${email}/${password}`);
        } catch (error) {
            console.error('Error during authentication:', error);
            throw error;
        }
    }

    async addUser(user) {
        try {
            return await axios.post(`${HOMEMAKER_API_BASE_URL}/signup/`, user);
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    }

    async getUser(userId) {
        try {
            return await axios.get(`${HOMEMAKER_API_BASE_URL}/getHomeMaker/${userId}`);
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async getAllCustomers() {
        try {
            return await axios.get(`${CUSTOMER_API_BASE_URL}/getAllCustomers`);
        } catch (error) {
            console.error('Error fetching all customers:', error);
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            return await axios.delete(`${HOMEMAKER_API_BASE_URL}/deleteHomeMaker/${userId}`);
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }

    async updateUserDetails(user) {
        try {
            return await axios.put(`${HOMEMAKER_API_BASE_URL}/updateUserDetails`, user);
        } catch (error) {
            console.error('Error updating user details:', error);
            throw error;
        }
    }

    async getMyCustomers(id) {
        try {
            return await axios.get(`${HOMEMAKER_API_BASE_URL}/getMyCustomers/${id}`);
        } catch (error) {
            console.error('Error fetching customers:', error);
            throw error;
        }
    }

    async getAllCities() {
        try {
            return await axios.get(`${HOMEMAKER_API_BASE_URL}/cities`);
        } catch (error) {
            console.error('Error fetching all cities:', error);
            throw error;
        }
    }

    async homeMakersByCity(city) {
        try {
            return await axios.get(`${HOMEMAKER_API_BASE_URL}/homeMakersByCity/${city}`);
        } catch (error) {
            console.error('Error fetching home makers by city:', error);
            throw error;
        }
    }

    async getAllOrders(userId) {
        try {
            return await axios.get(`${HOMEMAKER_API_BASE_URL}/getAllOrders/${userId}`);
        } catch (error) {
            console.error('Error fetching all orders:', error);
            throw error;
        }
    }
}

export default new HomeMakerService();
