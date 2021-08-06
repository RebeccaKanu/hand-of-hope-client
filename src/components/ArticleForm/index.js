import React, { Component } from "react";
// import appContext from '../../store';
import axios from "axios";
import "../../../src/assets/stylesheets/adminPage.scss";



//const token = JSON.parse(localStorage.getItem('auth')).token
//  function () => {}
// const response = await /api/articles(token);
// if( token){

// FORM ADD ARTICLE 

// export class FormulaireArticle extends Component {
//   // static contextType = appContext;

//   constructor(props){
//     super(props);
//     this.state = {
//     //  token: this.parse(localStorage.getItem('auth')).token ,
//     data: [], //data intialisé à vide car il n'y a pas encore de requête
//     error: null,
//     title:"",
//     image:"",
//     tags:"",
//     resume_article:"",
//     content_article:"",
//     author_article:"",
//     video:""
//    };

//  }

//  async componentDidMount() {

//     try {
//       const response = await ArticleService.getAllArticle();

//       this.setState({
//         data: response.data,
//       });

//     } catch (error) {

//     }
// }

// handleChange = (e) => {
//  //récupère les valeurs du champs de formulaire dynamiquement
//  const { name, value } = e.target;

//  this.setState({ [name]: value }); //met à jour email, user_name et password
//  console.log("name", value);

// }
// handleChangeImage = (e) => {
//   const img = e.target.files[0]
//   const reader =  new FileReader();

//   if (img){
//     reader.readAsDataURL(img)
//     const image = reader.result
//     reader.addEventListener('load', () => this.setState({image}))
//   }

  
// }

// handleSubmit = (e) => {
//   e.preventDefault();
// const article = {
//   title:this.state.title,
//   tags:this.state.tags,
//   resume_article:this.state.resume_article,
//   content_article:this.state.content_article,
//   author_article:this.state.author_article,
//   video:this.state.video,
//   image:this.state.image

// }
//  const config = {

//    headers: {authorization :`Bearer ${localStorage.getItem("token")}`},
//    body : JSON.stringify(article)
//  }

// axios.post('http://localhost:4000/api/article', config)

// }
//   render() {
//     return (
//       <div>
//         <form action="POST"  onSubmit={this.handleSubmit} encType = "multipart/form-data">

//         <fieldset className="form-group">
//           <label htmlFor="title" title="title:" />
//           <input
//             id="title"
//             className="form-input"
//             name="title"
//             type="text"
//             onChange={this.handleChange}
//           />
//         </fieldset>

//         <fieldset className="form-group">
//           <label htmlFor="video" title="video:" />
//           <input
//             id="video"
//             className="form-input"
//             name="resume_article"
//             type="text"
//             onChange={this.handleChange}
//           />
//         </fieldset>

//         <fieldset className="form-group">
//           <label htmlFor="content_article" title="content_article:" />
//           <input
//             id="content_article"
//             className="form-input"
//             name="content_article"
//             type="text"
//             onChange={this.handleChange}
//           />
//         </fieldset>

//         <fieldset className="form-group">
//           <label htmlFor="resume_article" title="resume_article:" />
//           <input
//             id="resume_article"
//             className="form-input"
//             name="resume_article"
//             type="text"
//             onChange={this.handleChange}
//           />
//         </fieldset>

//         <fieldset className="form-group">
//           <label htmlFor="tags" title="tags:" />
//           <input
//             id="tags"
//             className="form-input"
//             name="tags"
//             type="text"
//             onChange={this.handleChange}
//           />
//         </fieldset>

//         <fieldset className="form-group">
//           <label htmlFor="image" title="image:" />
//           <input
//             id="image"
//             className="form-input"
//             name="image"
//             type="file"
//             onChange={this.handleChangeImage}
//           />
//         </fieldset>

//         <input
//           id="formButton"
//           className="btn btn-primary"
//           type="submit"
//           placeholder="Send message"
//         />
//             {/* <section>
//               <button > Ajouter </button>
//               <button > suprimer </button>
//               <button > modifier </button>
//             </section> */}
//       </form>
//       </div>
//     );
//   }
// }
