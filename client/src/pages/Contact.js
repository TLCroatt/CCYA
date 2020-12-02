import React from 'react';
import { Container, Card, CardImg, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SB7 from '../assets/SB7.JPG'
import Footer from '../components/Footer/Footer';
import '../Forms.css'
import API from '../utils/API';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        API.sendMail(this.state)
        .then((response)=>{
        if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm();
        } else if (response.data.status === 'fail') {
            alert ("Message failed to send.");
        }
        })
    }
    // handleSubmit(e){
    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url: "https://localhost:3002/send",
    //         data: this.state
    //     }).then((response)=>{
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             this.resetForm()
    //         } else if (response.data.status === 'fail') {
    //             alert ("Message failed to send.")
    //         }
    //     })
    // }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render(){
        return (
            <div>
                <Container className="form-container">
                    <div>
                        <Card className="contact-card">
                            <CardImg top width="100%" src={SB7} alt="coach and player giving high five" />
                            <CardBody>
                                <h2 className="contactTitle">Contact Us!</h2>
                                <hr />
                                <Form className="contactForm">
                                <FormGroup onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email Address</Label>
                                    <Input type="text" name="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <Input type="textarea" name="message" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                </FormGroup>
                                <Button onClick={this.handleSubmit} color="success" size="lg">Submit</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
    
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

}

export default Contact;