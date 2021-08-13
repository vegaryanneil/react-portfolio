import React from 'react'
import {Link} from 'react-router-dom';
import Styled from 'styled-components';

const Hero = () => {
    return (
        <div>
            <div className="h-screen flex flex-col justify-center items-center text-center bg-primary">
                <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-body mb-14 max-w-7xl">
                    Hi, my name is Ryan and I am a full stack web developer.
                </h1>
                <Link to='Projects' className="py-6 px-10 bg-accent rounded-full text-3xl focus:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
                    Projects
                    <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>           
                </Link>
                <ContactButton className="">        
                    <svg className="w-12 h-12 animate-bounce" fill="#F13C20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </ContactButton>
            </div>
        </div>
    )
}

const ContactButton = Styled.div
`
position: fixed;
right: 1%;
bottom: 1%;
`
export default Hero
