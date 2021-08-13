import React from 'react';
import { Link } from 'react-router-dom';
import JustYourType from '../Images/JYTExample.PNG';

const ProjectContent = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-primary">
            <div className="h-1/2 w-1/2">
                <img className="inset-0 h-full w-full" src={JustYourType} alt="Landing page for Just Your Type"></img>
            </div>
            <div className="flex flex-row space-x-36 py-2">
                <Link to='Projects' className=" h-full px-6 bg-accent rounded-full text-l focus:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
                    Github
                    <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>           
                </Link>
                <Link to='Projects' className="h-full py-2 px-6 bg-accent rounded-full text-l focus:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
                    Live
                    <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>           
                </Link>
            </div>
        </div>
    )
}

export default ProjectContent
