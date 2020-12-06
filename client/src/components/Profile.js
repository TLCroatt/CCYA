import React, { useContext } from 'react';
import { Row, Col, CardText, Button, Form, FormGroup, Input } from 'reactstrap';
import UserContext from '../utils/UserContext';
import Register from "./Registration";

export const Profile = () => {
  const { user, handleRemoveChild, handleAddChild,
    handleChildInputChange, childData } = useContext(UserContext);
    console.log("Profile user", user);
  return (
    <CardText>
    {(user && user.participants.length > 0) ? (
      user.participants.map(({childName, childDoB, address}) => {
        return(
        <Row>
          <Col id="registerBtn">
            <Button Link to={ Register } color="success" size="md">Register</Button>
          </Col>
          <Col id="kidInfo"> {childName}  {childDoB}  {address}</Col>
          <Col id="removeBtn">
            <Button onClick={handleRemoveChild} color="danger" size="md">Remove</Button>
          </Col>
        </Row>
        )
      }) 
    ) : (
      <Row> No participants added</Row>
    )}

    <hr></hr>
    
    <h5>Add a new Participant</h5>
    <Form>
      <FormGroup className="form-group">
        <Input
          type="text"
          name="childName"
          id="childName"
          placeholder="first and last name"
          value={childData.childName}
          onChange={handleChildInputChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Input
          type="text"
          name="childDoB"
          id="childDoB"
          placeholder="MM/DD/YYYY"
          value={childData.childDoB}
          onChange={handleChildInputChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Input
          type="text"
          name="address"
          id="childaddress"
          placeholder="address"
          value={childData.address}
          onChange={handleChildInputChange}
        />
      </FormGroup>
      <Button onClick={handleAddChild} id="addParticipantBtn" size="md">
        Add Participant
      </Button>
    </Form>
    </CardText>
  );
}

export default Profile;