import api from "./api";

const lastArticle = {
  getLastArticle: async () => {
    return await api.get("/api/dernierArticles");
  },
};

export default lastArticle;
