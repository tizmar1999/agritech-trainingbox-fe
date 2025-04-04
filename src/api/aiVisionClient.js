import axios from 'axios';
import { image } from "../constants/image";

class ApiClient {
    static instance;

    constructor() {
        if (!ApiClient.instance) {
            ApiClient.instance = this;
            this.axiosInstance = axios.create({
                baseURL: 'http://localhost', // Change to your API base URL
                timeout: 5003,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        return ApiClient.instance;
    }

    async getData(endpoint) {
        try {
            const response = await this.axiosInstance.get(endpoint);
            return response.data;
        } catch (error) {
            console.error('GET error:', error.message);
            throw error;
        }
    }

    async postData(endpoint, data) {
        try {
            const response = await this.axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.error('POST error:', error.message);
            throw error;
        }
    }
}

// Export a single instance
const AIApiClient = new ApiClient();
export default AIApiClient;
