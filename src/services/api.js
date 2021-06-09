import axios from "axios";

//Connection to database
const api = axios.create({
  baseURL: `http://localhost:4000/`, // url api
});

//Authenticate

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  });
  
  export default api;
  