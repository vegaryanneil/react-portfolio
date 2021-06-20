import React from "react";
import styled from "styled-components";

const AboutSection = () => {
    return (
        <Description>
            <div>
                <div className="title">
                    <div className="hide">
                        <h1>Is your website <span>working?</span></h1>
                    </div>
                </div>
                <h2> What I mean is: Is your website bringing you clients?</h2>
                <button>Contact Me</button>
            </div>
        </Description>
    )
}

const Description = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    max-width: 80vw;
`

export default AboutSection;