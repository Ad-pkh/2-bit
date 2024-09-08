// hooks/useSignup.js
// const API_URL = "http://localhost:8080/api";

const useSignup = async (data) => {
  try {
    const response = await fetch("http://localhost:8085/api/register", {
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

export default useSignup;

// hooks/useSignup.js
// const API_URL = "http://localhost:8080/api";

export const useLogin = async (data) => {
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
