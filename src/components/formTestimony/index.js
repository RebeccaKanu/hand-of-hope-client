<<<<<<< HEAD:src/components/formTestimony/index.js
import React, {Component} from 'react';
=======
import React from 'react';
import { useForm } from "react-hook-form";
import {addAReview} from "../../services/formulaireTesimonyconnect";
>>>>>>> c20e312 (testimonyform):src/components/TestimonyForm/index.js

    const wait = function(duration = 1000) {
        return new Promise((resolve) => {
            window.setTimeout(resolve, duration)
        })
    }
function index(){

<<<<<<< HEAD:src/components/formTestimony/index.js
    const{registrer, handleSubmit, formState, errors} = useForm()
    const {isSubmitting} = formState 
=======
    const{register, handleSubmit, formState, errors} = useForm()
    const { isSubmitting } = formState 
>>>>>>> c20e312 (testimonyform):src/components/TestimonyForm/index.js
    
    const onSubmit = async data =>{
        console.log(data)
        await wait(4000);
    }
    
    
    return (
        <>
        <h1>Votre message</h1>

        <form action="/" method="post" class="ui form" onSubmit={handleSubmit(onsubmit)}>
            
            <div class=" fiels">
                <label htmlFor="last_name">Votre nom</label>
                <input type="text" id="last_name" name="last_name" ref={registrer({required: true})} minlength="4" maxlength="8" size="10"></input>

                <label htmlFor="first_name">Votre prénom</label>
                <input type="text" id="first_name" name="first_name" ref={registrer({required: true})} minlength="4" maxlength="8" size="10"></input>

                <label htmlFor="role">Votre Metier</label>
                <input type="text" id="role" name="role" ref={registrer({required: true})} minlength="4" maxlength="8" size="10"></input>

                <label htmlFor="opinion">Message</label>
                <textarea name="opinion" id="opinion"  ref={registrer({required: true})}></textarea>

            </div>

            <button  disabled={isSubmitting} type="submit" class="ui blue label submit icon button">
            <i class="icone edit"></i> Envoyer
            </button>

        </form>
            
        </>
    );
    
}

export default index;