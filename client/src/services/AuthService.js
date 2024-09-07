
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Function to login the user
export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL+"/login",{
      email,
      password
    });

    // Handle success response
    if (response.status === 200) {
      console.log('Login successful:', response.data);
      return response.data; // You can return tokens or user data here
    }
  } catch (error) {
    // Handle error response
    console.error('Error during login:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const signup = async (username,email, password,role) => {
    try {
      const response = await axios.post(API_URL+"/register", {
        username,
        email,
        password,
        role
      });
  
      // Handle success response
      if (response.status === 200) {
        console.log('signup successful:', response.data);
        return response.data; // You can return tokens or user data here
      }
    } catch (error) {
      // Handle error response
      console.error('Error during login:', error.response ? error.response.data : error.message);
      throw error;
    }
  };