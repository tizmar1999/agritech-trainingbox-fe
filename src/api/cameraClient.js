import axios from 'axios';
import { image } from "../constants/image"

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost', // Change to your API base URL
    timeout: 5010,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example GET request
export const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('GET error:', error.message);
        throw error;
    }
};

// Example POST request
export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('POST error:', error.message);
        throw error;
    }
};

export const getMockStreamingImage = () => {
    return image
}