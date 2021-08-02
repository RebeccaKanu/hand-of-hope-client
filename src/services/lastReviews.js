import api from "./api";

const lastReviews = {
  getLastReviews: async () => {
    return await api.get("/api/derniersPetitMots");
  },
};
export default lastReviews;
