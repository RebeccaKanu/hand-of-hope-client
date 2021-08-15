import api from "./api";

//
const token = localStorage.getItem("token");

//
const config = { headers: { Authorization: `${token}` } };

const reviewService = {
  testimony: async (last_name, first_name, opinion, role) => {
    const review = { last_name, first_name, opinion, role };

    return await api.post("/votrePetitMot", review);
  },
  getOneTestimony: async (testimonyId) => {
    const id = testimonyId;

    return await api.get(`/votrePetitMot/${id}`)
  },
  allTestimony: async () => {
    return await api.post("/votrePetitMot", config);
  },
  deleteOneTestimony: async (testimonyId) => {
    const id = testimonyId;

    return await api.delete(`/votrePetitMot/${id}`);
  },
};

export default reviewService;
