import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, CardTitle, CardGroup, CardBody, } from 'reactstrap';
import Schedule from '../components/Calendar';
import Profile from '../components/Profile'
import Footer from '../components/Footer/Footer';
import UserContext from '../utils/UserContext';


export const Members = () => {
  const { user, loggedIn } = useContext(UserContext);
  return (
    <div>
    {loggedIn ? (
      <div>
        <Container>
          <CardGroup>
            <Card>
              <CardBody className="members">
                <CardTitle className="member-welcome" tag="h3">Welcome {user && user.firstname} {user && user.lastname} </CardTitle>
                <Profile />
              </CardBody>
            </Card>
            <Card>
              <CardBody className="schedule">
                <CardTitle className="calendar-title" tag="h3">Schedule</CardTitle>
                <Schedule />
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
        <Footer />
      </div>
      ) : (
      <div>
        <Link to="/login"><h2>Log in to view this page</h2></Link>
      </div>
    )}
    </div>
  );
}

export default Members;