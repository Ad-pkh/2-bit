import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Function to login the user
// export const login = async (payload) => {
//   try {
//     const response = await axios.post(API_URL + "/login", {
//       //  JSON.stringify(data)
//     });

//     // Handle success response
//     if (response.status === 200) {
//       console.log("Login successful:", response.data);
//       return response.data; // You can return tokens or user data here
//     }
//   } catch (error) {
//     // Handle error response
//     console.error(
//       "Error during login:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// };
export const login = async (data) => {
  try {
    const response = await fetch("http://localhost:8085/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send the input data
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Rename the response data variable to avoid conflict with the input data
    const responseData = await response.json();
    console.log(responseData);
    return responseData; // Return the response data to allow the caller to handle it
  } catch (error) {
    // Log error message
    console.error("Login error:", error.message);
    throw error; // Optionally, throw the error to be handled by the caller
  }
};

export const signup = async (data) => {
  console.log(data);
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send the input data
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Rename the response data variable to avoid conflict with the input data
    const responseData = await response.json();
    console.log(responseData);
    return responseData; // Return the response data to allow the caller to handle it
  } catch (error) {
    // Log error message
    console.error("Signup error:", error.message);
    throw error; // Optionally, throw the error to be handled by the caller
  }
};
