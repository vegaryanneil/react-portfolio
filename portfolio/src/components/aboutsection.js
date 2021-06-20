import React from "react";
import styled from "styled-components";

const AboutSection = () => {
    return (
        <Description>
            <div>
                <div className="title">
                    <div className="hide">
                        <h2>Is your website working?</h2>
                    </div>
                
                </div>
                <p> What I mean is: Is your website bringing you clients?</p>
                <ContactButton>Contact Me</ContactButton>
            </div>
        </Description>
    )
}


// // :root {
//     --primary-color: #EFEEE7;
//     --accent-color: #8D7F2E;
//     --button-color: #FF4E00;
//     --text-color: #232323;
//   }
// Styled Components
const Description = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 5rem 10rem;
    color: #232323;
    background-color: #EFEEE7;
    // margin: 0 auto;
    // box-sizing: border-box;
`

const ContactButton = styled.button`
padding: 1rem 2rem;
margin: 1rem;
background: #FF4E00;
color: #232323;
border: 1px solid #232323;
font-size: 1rem;
text-decoration: none;
align-self: center;
cursor: pointer;
// font-family: 'Oswald', sans-serif;
text-transform: uppercase;
color: var(--text-color);
`
export default AboutSection;