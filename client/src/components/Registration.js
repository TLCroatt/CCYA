import React, { useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UserContext from '../utils/UserContext';


const Registration = () => {
  const { childData, teamList, handleChildInputChange,
          handleRegistration } = useContext(UserContext);
  console.log("RegFormChild", childData);
  return (
    <div>
      <h2 className="register-title">Register</h2>
      <hr />
      <Form>
      {/* <h3>Participants Name: { childData.name }</h3>
      <h3>Date of Birth: { childData.childDoB }</h3>
      <h3>Address: { childData.address }</h3>
      <h3>Parent or Guardian: { user.firstname } { user.lastname }</h3>
      <h3>Email: { user.email }</h3> */}
      
      <FormGroup>
        <Label for="name">Participant's Name</Label>
        <Input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="full name" 
          value={childData.name}
          onChange={handleChildInputChange} />
     </FormGroup>
      <FormGroup>
        <Label for="childDoB">Date of Birth</Label>
        <Input 
          type="text" 
          name="childDoB" 
          id="childDoB" 
          placeholder="MM/DD/YY"
          value={childData.childDoB} 
          onChange={handleChildInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="address">address</Label>
        <Input 
          type="text" 
            name="address" 
            id="address" 
            placeholder="123 this St, commerce City"
            value={childData.address}
            onChange={handleChildInputChange}  />            
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone Number</Label>
        <Input 
          type="text" 
            name="phone" 
            id="phone" 
            placeholder="(555) 123-4567"
            value={childData.phone}
            onChange={handleChildInputChange}  />            
      </FormGroup>
      <FormGroup>
        <Label for="team">Select</Label>
        <Input 
          type="select" 
          name="team" 
          id="team" 
          value={childData.team}
          onChange={handleChildInputChange}>
          {teamList.map( team => {
            return(<option>{ team }</option>)
          })}
        </Input>
      </FormGroup>
        {childData.name.length > 3 &&
        childData.phone.length > 10 &&
        childData.childDoB.length > 6 &&
        childData.address.length > 5 &&
        childData.team.length > 3  ? (
          <Button onClick={handleRegistration} color="success" size="lg">
            Register
          </Button>
        ) : (
          <Button onClick={handleRegistration} color="danger" size="lg" disabled>
            Register
          </Button>
        )}
    </Form>
    </div>
  );
}

export default Registration;