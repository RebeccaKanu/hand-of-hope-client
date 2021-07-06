import api from "./api";

const lastReviews = {
    getLastReviews: async () => {
        return await api.get("/api/votrePetitMot");
    }
};
export default lastReviews;