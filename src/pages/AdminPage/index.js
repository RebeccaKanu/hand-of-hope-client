import React, { Component } from "react";
import { ArticleService } from "../../services/";
// import appContext from '../../store';
import axios from 'axios'
import '../../../src/assets/stylesheets/adminPage.scss'

//  LAST ARTICLE 

export class LastArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "280px",
      height: "400px",
      data: [], //data intialisé à vide car il n'y a pas encore de requête
      error: null,
    };
  }
  async componentDidMount(){
   try {
   const resLastArticle = await axios.get(`http://localhost:4000/api/dernierArticles`);
   console.log("DATAAAAAA", resLastArticle)
      this.setState({
          data: resLastArticle.data,
        });
   }
   catch (error) {
     console.error(error);
     this.setState({ error:error });
   }
 }

  render() {
    return (
      <div className="lastArticle" style={{border:"3px solid red"}}>
        <section>
          <h1> les 3 DERNIERES ACTUALITÉS</h1>
        </section>

         {this.state.data.map((element, index) => {
          return (
            <div key={index}>
               <img
                    src={element.img}
                    alt={element.title}
                    style={{
                      width: this.state.width,
                      height: this.state.height,
                    }}
                  />
              <article><button>Ajouter</button>                    
              <button>suprimer</button>
              <button>modifier</button>
                <h3>{element.title}</h3>
                <p>{element.resume_article}</p>
                <p>{element.content_article}</p>
                <p>{element.author_article}</p>
              </article>

              
            </div>
          );
        })} 
      </div>
    )
  }
}

//ALL ARTICLE
export class AllArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  async componentDidMount(){
    
    try {
    const resAllArticle = await axios.get(`http://localhost:4000/api/articles`);
    this.setState({
      data: resAllArticle.data,
    });
    console.log('article response', resAllArticle.data)
    }
    catch (error) {
      console.error(error);
      this.setState({ error:error });
    }
  }
  

  render() {   
    return (

      <div style={{border:"3px solid pink"}}>
        <section>
          <h1>Tous les articles</h1>
        </section>

        {this.state.data.map((element, index) => {
          return (
            <div key={index}>
              
              <article><button>Ajouter</button>                    
              <button>suprimer</button>
              <button>modifier</button>
                <h2>{element.title}</h2>
                <p>{element.resume_article}</p>
                <p>{element.content_article}</p>
                <p>{element.author_article}</p>
              </article>
            </div>
          );
        })} 
              
      </div>  
    )
  }
}
 
// LAST TESTIMONY 



// ALL TESTIMONY
export class AllTestimony extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  async componentDidMount(){
    try {
    const resAllTestimony = await axios.get(`http://localhost:4000/api/votrePetitMot`);
    // const deleteATestimony = await axios.delete(`http://localhost:4000/api/votrePetitMot/:id`);
    console.log('resssskkkkk', resAllTestimony.data);
    this.setState({
      data: resAllTestimony.data,
    });
    }
    catch (error) {
      console.error(error);
      this.setState({ error:error });
    }
  }

  render() {   
    return (
      <div style={{border:"3px solid green"}}>
        <section>      
        <h1>Tous les commentaires</h1>
          {this.state.data.map((element, index) => {
          return (
            <div key={index}>
              <div>
                <h1>{element.last_name}</h1>
                <p>{element.role}</p>
                <p>{element.opinion}</p> 
              </div>
              <button>Supprimer</button>
            </div>
          );
        })}  
        </section>                         
      </div>  
    )
  }
}

































//const token = JSON.parse(localStorage.getItem('auth')).token
//  function () => {}
// const response = await /api/articles(token);
// if( token){


















































// FORM ADD ARTICLE 

export class FormulaireArticle extends Component {
  // static contextType = appContext;

  constructor(props){
    super(props);
    this.state = {
    //  token: this.parse(localStorage.getItem('auth')).token ,
    data: [], //data intialisé à vide car il n'y a pas encore de requête
    error: null,
    title:"",
    image:"",
    tags:"",
    resume_article:"",
    content_article:"",
    author_article:"",
    video:""
   };

 }

 async componentDidMount() {

    try {
      const response = await ArticleService.getAllArticle();

      this.setState({
        data: response.data,
      });

    } catch (error) {

    }
}

handleChange = (e) => {
 //récupère les valeurs du champs de formulaire dynamiquement
 const { name, value } = e.target;

 this.setState({ [name]: value }); //met à jour email, user_name et password
 console.log("name", value);

}
handleChangeImage = (e) => {
  const img = e.target.files[0]
  const reader =  new FileReader();

  if (img){
    reader.readAsDataURL(img)
    const image = reader.result
    reader.addEventListener('load', () => this.setState({image}))
  }

  
}

handleSubmit = (e) => {
  e.preventDefault();
const article = {
  title:this.state.title,
  tags:this.state.tags,
  resume_article:this.state.resume_article,
  content_article:this.state.content_article,
  author_article:this.state.author_article,
  video:this.state.video,
  image:this.state.image

}
 const config = {

   headers: {authorization :`Bearer ${localStorage.getItem("token")}`},
   body : JSON.stringify(article)
 }

axios.post('http://localhost:4000/api/article', config)

}
  render() {
    return (
      <div>
        <form action="POST"  onSubmit={this.handleSubmit} encType = "multipart/form-data">

        <fieldset className="form-group">
          <label htmlFor="title" title="title:" />
          <input
            id="title"
            className="form-input"
            name="title"
            type="text"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="video" title="video:" />
          <input
            id="video"
            className="form-input"
            name="resume_article"
            type="text"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="content_article" title="content_article:" />
          <input
            id="content_article"
            className="form-input"
            name="content_article"
            type="text"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="resume_article" title="resume_article:" />
          <input
            id="resume_article"
            className="form-input"
            name="resume_article"
            type="text"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="tags" title="tags:" />
          <input
            id="tags"
            className="form-input"
            name="tags"
            type="text"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="image" title="image:" />
          <input
            id="image"
            className="form-input"
            name="image"
            type="file"
            onChange={this.handleChangeImage}
          />
        </fieldset>

        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Send message"
        />
            {/* <section>
              <button > Ajouter </button>
              <button > suprimer </button>
              <button > modifier </button>
            </section> */}
      </form>
      </div>
    );
  }
}


/// CONTENT AdminPage
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <section>
      <h1>Bonjour!</h1>
      <reLastTestimony/>
      <AllTestimony/>
     <LastArticle/>
     <AllArticle/>
     <FormulaireArticle/>
     </section>
    );
  }
}

export default AdminPage;
