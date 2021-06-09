import axios from "axios";

<<<<<<< HEAD
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
  
=======
//connexion to the db
const api = axios.create({
  baseURL: `http://localhost:4000/`,
});

// A U T H E N T I C A T E

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = "Bearer " + token;
//   }
//   return config;
// });

export default api;
>>>>>>> d71aad762862860ff1b5fadb2956f17f4d28303d
