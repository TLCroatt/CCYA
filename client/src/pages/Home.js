import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Logo from '../assets/SBLogo.jpg';
import SB6 from '../assets/SB6.JPG';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Footer from '../components/Footer/Footer'

const items = [
  {
    src: './images/SB1.JPG',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: "",
    key: '1',
  },
  {
    src: './images/SB2.JPG',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: "",
    key: '2',
  },
  {
    src: './images/SB3.JPG',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: "",
    key: '3',
  }
];

const Home = () => {

  return (
    <div>
    <Jumbotron />
    <Container>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Mission Statement</CardTitle>
            <CardText>Commerce City Youth Athletics believes that our programs help teach children about the importance of commitment, discipline, and teamwork. These skills will be beneficial to our participants throughout their adult lives. We believe our programs motivate our youths physically, to support good health, mentally, to enable them to think for themselves, and civically, to develop pride in our community and to represent our community in a positive manner. It also allows Commerce City residents to view competitive youth sports for free.</CardText>
          </CardBody>
          <CardImg top width="100%" src={ Logo } alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src={ SB6 } alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Sponsors</CardTitle>
            <CardText>We could insert one image with all of the sponsor's logos compiled into</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>

      <Row>
        <Col>
          <h1>About Us</h1>
          Commerce City Youth Athletics is a non-profit organization. We as a league are committed to honesty, integrity and a commitment to provide low cost registration fees so that as many as possible youth children may join the sport we provide. We offer a girls’ traveling softball team. We are able to provide the program through registration fees, fundraisers, and donations. All officers and coaches are non-paid volunteers.
          <br />
          <br />

          No one involved in our program receives payment for the time, energy and services they provide to CCYA.
          Our Coaches, Team Parents, Committee members and Board members take time away from their families to donate many hours a week to our organization. We hope that each and every one of you appreciates all that they give to our children. Please remember we are NOT a CITY operated or funded program.
          We conduct very important fundraisers for our organization every year, that without, we would have to raise our registration fees. The money raised is used to pay for the equipment, uniforms that we purchase, as well as the cost of team fees, etc.
          <br />
          <br />
          The money raised is used to pay for the equipment, uniforms that we purchase, as well as the cost of team fees, etc. Please support these worth while fundraising projects. We do accept money donations.
          <br />
          <br />
          You can mail these donations to:
          <br />

          Commerce City Youth Athletics
          C/O Chuck Ingram
          6820 East 77th Avenue
          Commerce City, CO 80022
        </Col>
      </Row>
      </Container>
      <Row>
        <Col md="8" className="mx-auto">
          <UncontrolledCarousel className="carousel" items={items} />
        </Col>
      </Row>  
      <Footer />
    </div>
  );
};

export default Home;