import React, { useState } from 'react';
// import Styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
// import { Link } from 'react-router-dom';


function ContactSection() {

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // update state based on form input changes
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2ic2u7', 'template_btxt32c', e.target, 'user_C9L2p6Qq06OVGTs81D7Dp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    document.getElementById("messageSent").style.visibility = "visible";
    setTimeout(function(){
      window.location.reload(1);
   }, 2000);
  };

  return (
    <>
      {/* <Form onSubmit={handleFormSubmit}>
        <InsideForm>
          <FormHeader>
            <h2>We would love to hear from you.</h2>
          </FormHeader>
          <FormGroup>
            <FormLabel>First Name:</FormLabel>
            <FormInput type="text" name="firstName" id="first-name" placeholder="First Name" value={formState.firstName} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name:</FormLabel>
            <FormInput type="text" name="lastName" id="last-name" placeholder="Last Name" value={formState.lastName} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInput type="email" name="email" id="email" placeholder="Your email" value={formState.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Message:</FormLabel>
            <MessageTextArea type="text" name="message" id="message" placeholder="Please write your message to us!" onChange={handleChange} value={formState.message} />
          </FormGroup>
          <ButtonContainer>
            <button>Submit</button>
          </ButtonContainer>
            <h4 id="messageSent" style={{ display: "inline", paddingLeft: "1em", visibility: "hidden", color: "white" }}>Thank you! Your message has been sent.</h4>
        </InsideForm>
      </Form> */}
    </>
  );
}


export default ContactSection;