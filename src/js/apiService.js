import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://clab-demo.onrender.com';

// Create an instance of axios
const api = axios.create({
  baseURL: BASE_URL,
});

// Example function to get data from the API
export const getData = async () => {
  try {
    const response = await api.get('/tickets');
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

// Example function to post data to the API
export const postData = async (data) => {
  try {
    const response = await api.post('/your-endpoint', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};