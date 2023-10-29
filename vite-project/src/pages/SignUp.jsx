import React, { useState } from "react";
import { Container, Form, Button, FormGroup } from "react-bootstrap";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <Container>
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>Already have an account? <Link to="login">Login</Link></p>
      </Form>
    </Container>
  );
};

export default SignUp;
