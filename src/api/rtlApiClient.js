import axios from 'axios';
import { ENV } from '../constants/config';

class RTLApiClient {
    static instance;

    constructor() {
        if (!RTLApiClient.instance) {
            RTLApiClient.instance = this;
            this.axiosInstance = axios.create({
                baseURL: ENV.rtlNodeBackedPort,
                timeout: 20000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        return RTLApiClient.instance;
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

// Export a single instance of the RTLApiClient class
const rtlApiClientInstance = new RTLApiClient();
export default rtlApiClientInstance;
