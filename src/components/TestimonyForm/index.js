import React from 'react';
import { useForm } from "react-hook-form";
import {addAReview} from "../../services/formulaireTesimonyconnect";

    const wait = function(duration = 1000) {
        return new Promise((resolve) => {
            window.setTimeout(resolve, duration)
        })
    }
function Index() {

    const{register, handleSubmit, formState, errors} = useForm()
    const { isSubmitting } = formState 
    
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
                <input type="text" id="last_name" name="last_name" {...register('test', { required: true })} minlength="4" maxlength="8" size="10"></input>

                <label htmlFor="first_name">Votre prénom</label>
                <input type="text" id="first_name" name="first_name" {...register('test', { required: true })} minlength="4" maxlength="8" size="10"></input>

                <label htmlFor="role">Votre Metier</label>
                <input type="text" id="role" name="role" {...register('test', { required: true })} minlength="4" maxlength="8" size="10"></input>

                <label htmlFor="opinion">Message</label>
                <textarea name="opinion" id="opinion"  {...register('test', { required: true })}></textarea>

            </div>

            <button  disabled={isSubmitting} type="submit" class="ui blue label submit icon button">
            <i class="icone edit"></i> Envoyer
            </button>

        </form>
            
        </>
    );
    
}

export default Index;