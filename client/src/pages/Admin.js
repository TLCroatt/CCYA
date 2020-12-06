import React, { useContext } from 'react';
import { Container } from 'reactstrap';
import '../../src/Forms.css'
import UserContext from '../utils/UserContext';

const Admin = () => {
    const { isAdmin } = useContext(UserContext);
    let admin = isAdmin();

    return(
    <Container className="form-container">
      {admin ? <h2>This is the Admin page for future use</h2> :
      <h2>You need to be an admin to acces this</h2> }      
    </Container>
    )};

export default Admin;