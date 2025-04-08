import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost', // Change to your API base URL
    timeout: 5003,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const takePicture = async () => {
    try {
        const response = await apiClient.get('take-picture');
        return response.data;
    } catch (error) {
        console.error('GET error:', error.message);
        throw error;
    }
};