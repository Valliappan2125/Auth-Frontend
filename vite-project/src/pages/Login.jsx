import React, { useState } from "react";
import { Container, Form, Button, FormGroup } from "react-bootstrap";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

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
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit">Login</Button>      
      </Form>
    </Container>
  )
}

export default Login