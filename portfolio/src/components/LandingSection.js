import React from "react";
import styled from "styled-components";

const LandingSection = () => {
    return (
        <Description>
            <div>
                <Title>
                    <div className="hide">
                        <h1>Is your website <span>working?</span></h1>
                    </div>
                </Title>
                <h2> What I mean is: Is your website bringing you clients?</h2>
                    <LandingButton>
                    <button>Contact Me</button>
                    </LandingButton>
            </div>
        </Description>
    )
}

const Description = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
`
const Title = styled.div
`
    padding: 2rem 0;
    align-items: center;
`

const LandingButton = styled.div
`
    justify-content: center;
    align-self: center;
`
export default LandingSection;