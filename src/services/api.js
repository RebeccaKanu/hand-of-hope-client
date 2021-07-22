import axios from "axios";

//connexion to the db
const api = axios.create({
  baseURL: `http://localhost:4000/`,
});

export default api;



