import api from "./api";

import axios from 'axios';


async function addAReview (reviewers) {
    
    const reqConfig = {
            last_name :review.last_name,
            first_name :review.first_name,
            opinion:review.opinion,
            role:review.role
    }

    try{
        const response = await axios.post('http://localhost:4000/api/votrePetitMot',reqConfig);
        return response;
    }
    catch(err){
        console.log(err)
    }
}

async function deleteReview(id){

    const token = JSON.parse(localStorage.getItem('auth')).token
    const config = {

    }
    console.log("heyyyy")
    return await axios.delete(`http://localhost:4000/api/votrePetitMot/${id}`,config);
}

export {addAReview, deleteReview};