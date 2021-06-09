import React, {Component} from 'react';
import TestimonyForm from '../../components/TestimonyForm';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';




class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <Nav/>
            <TestimonyForm/>
            <Footer/>
            </>
        );
    }
}

export default index;