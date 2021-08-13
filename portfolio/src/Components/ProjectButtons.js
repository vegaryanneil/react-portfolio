import React from 'react'

const ProjectButtons = () => {
    return (
        <div>
         <div className="flex flex-row space-x-36 py-2">
                <button className=" h-full px-6 bg-accent rounded-full text-l focus:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
                    
                    <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>           
                </button>
                <button className="h-full py-2 px-6 bg-accent rounded-full text-l focus:bg-yellow-300 transition duration-300 ease-in-out flex items-center">
                    Live
                    <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>           
                </button>
            </div>   
        </div>
    )
}

export default ProjectButtons
