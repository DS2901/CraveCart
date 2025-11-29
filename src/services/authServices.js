import axiosInterceptor from "../utils/axiosInterceptor";

// Signup user
export const signupUser = async (userData) => {
  try {
    const response = await axiosInterceptor.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    }       
    return { error: error.message };
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    
    const response = await axiosInterceptor.post("/auth/login", userData);
    console.log(response, "response")
    return response.data; // usually token + user info
  } catch (error) {
    if (error.response) {
     return { error: error.response?.data?.error || "Login failed" };
    }
  }
};
