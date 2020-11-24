import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Registration = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Child's Name</Label>
        <Input type="input" name="text" id="name" placeholder="full name" />
     </FormGroup>
      <FormGroup>
        <Label for="DOB">DOB</Label>
        <Input type="input" name="text" id="DOB" placeholder="MM/DD/YY" />
      </FormGroup>
      <FormGroup>
        <Label for="guardian">Parent or Guardian</Label>
        <Input type="input" name="text" id="parent" placeholder="full name" />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone Number</Label>
        <Input type="input" name="text" id="phone" placeholder="(720)123-456" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="input" name="email" id="email" placeholder="example@gmail.com" />
      </FormGroup>
      <Button color="success" size="lg">Submit</Button>
    </Form>

  );
}

export default Registration;