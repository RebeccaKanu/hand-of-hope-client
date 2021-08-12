import api from "./api";

const postService = {

  publishArticle: async ( title, img, tags, resume_article, content_article, author_article, video) => {
     
    const article = { title, img, tags, resume_article, content_article, author_article, video };
    return api.post("/api/article", article);
  },

};
export default postService;