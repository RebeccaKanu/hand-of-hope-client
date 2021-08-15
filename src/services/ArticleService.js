import api from "./api";
//
const token = localStorage.getItem('token')
//
const config = {headers: { Authorization: `${token}`}}
//
const ArticleService = {

  //Visitor

  getLastArticle: async () => {
    return await api.get("/derniersArticles");
  },
  //Admin
  publishArticle: async ( title, img, tags, resume_article, content_article, author_article, video) => {

    const article = { title, img, tags, resume_article, content_article, author_article, video };

    return await api.post("/article", article, config);
  },
  getAllArticle: async () => {
    return await api.post("/articles", config);
  },
  //à réfacto en post et avec les config
  getOneArticle: async (articleId) => {
    const id = articleId;
    return await api.get(`/adminArticleDetails/${id}`);
  },
  deleteOneArticle: async (articleId) => {
    const id = articleId;
    return await api.delete(`/article/${id}`)
  },
  updateOneArticle: async (articleId) => {
    const id = articleId; 
    return await api.put(`/article/${id}`)
  }
  
};
export default ArticleService;
