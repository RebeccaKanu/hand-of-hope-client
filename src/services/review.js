import api from "./api";

const reviewService = {
        testimony: async (last_name, first_name, opinion, role) => {
      const review = { last_name, first_name, opinion, role};
      return await api.post("/api/votrePetitMot",review);
    },
  };

  export default reviewService;