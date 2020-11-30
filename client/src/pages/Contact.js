import React from 'react';
import { Container } from 'reactstrap';
import ContactCard from '../components/ContactCard'

import Footer from '../components/Footer/Footer';
import '../App.css';

const Contact = () => {

    return (
        <div>
            <Container>
                <ContactCard />
            </Container>
            <Footer/>
        </div>
    )
}

export default Contact;