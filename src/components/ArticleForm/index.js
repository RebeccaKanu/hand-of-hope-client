import React, {Component} from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { postArticle } from "../../services";

import "../../assets/stylesheets/TestimonyForm.scss";


   
export class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          title: "",
          img: "",
          tags: "",
          resume_article: "",
          content_article: "",
          author_article: "",
          video: "", 
          admin_id: "",
          error: null,
            
         };
    }



  handleChange = (e) => {
    
    const { name, value } = e.target;

    this.setState({ [name]: value }); 
    console.log("name", value);
  };

  handleSubmit = async (e) => {
 
    // var input = this.refs.myInput;
    // var inputValue = input.value;
    // if (inputValue === " ") {
    //   this.setState({
    //     valid: false,
    //   });
    // }
    e.preventDefault();
    try {
      const response = await postArticle.publishArticle(
        this.state.title,
        this.state.img,
        this.state.tags,
        this.state.resume_article,
        this.state.content_article,
        this.state.author_article,
        this.state.video,
        this.state.admin_id,
      );

      console.log("responseeeeee", response);

      // this.props.history.push("/");
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  };
    render() {
        return (
            <>
        <h1>Votre article</h1>

        <form  action="POST"  className="ui form"  onSubmit={this.handleSubmit}>
            
            <div class=" fiels">
                <label htmlFor="title">Titre</label>
                <input type="text" id="title" name="title" required onChange={this.handleChange}  value={this.state.title}/>

                <label htmlFor="img">Image</label>
                <input type="text" id="img" name="img" required onChange={this.handleChange} value={this.state.img}/>

                <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" name="tags"  required onChange={this.handleChange} value={this.state.tags}/>

                <label htmlFor="resume_article">Résumé</label>
                <input name="resume_article" id="resume_article" required onChange={this.handleChange} value={this.state.resume_article}/>

                <label htmlFor="content_article">Contenu de l'article</label>
                <input name="content_article" id="content_article" required onChange={this.handleChange} value={this.state.content_article}/>

                <label htmlFor="author_article">Autheur</label>
                <input name="author_article" id="author_article" required onChange={this.handleChange} value={this.state.author_article}/>

                <label htmlFor="video">Vidéo</label>
                <input name="video" id="video" required onChange={this.handleChange} value={this.state.video}/>

                <label htmlFor="admin_id">/</label>
                <input name="admin_id" id="admin_id" required onChange={this.handleChange} value={this.state.admin_id}/>

            </div>
            
            <button type="submit" class="ui blue label submit icon button" onClick={this.handleSubmit}>
            <i class="icone edit"></i> Envoyer
            </button>
        </form>
        </>
        );
    }
}

