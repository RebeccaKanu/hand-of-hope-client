import api from "./api";

const ArticleService = {

  getLastArticle: async () => {
    return await api.get("/api/derniersArticles");
  },
  getAllArticle: async () => {
    return await api.get("/api/articles");
  },
};
export default ArticleService;
