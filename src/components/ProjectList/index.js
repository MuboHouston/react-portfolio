import React, {useState} from "react";

function ProjectList() {
    const [projects]= useState([
        {
            name: 'dinnection',
            type: 'MERN',
            description: 'Dinnection is a full-stack social media web app for artists to connect, view, and promote contemporary art. After creating an account and signing in, if users want to add new art to the app then they would click "New Post". The user&#39s post is then stored in an AWS S3 bucket and the post displayed on the main page.'
        },
        {
            name: 'budget',
            type: 'Progress Web Application',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'travelers',
            type: 'HTML, JS, CSS, Fetch API',
            description: 'Travelers is a full-stack web app for users planning travel within the United States during the COVID-19 pandemic. This app was created to help keep users up to date with the weather and COVID-19 cases, deaths, and risk.'
        },
        {
            name: 'tech-blog',
            type: 'MongoDB',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'run-buddy',
            type: 'HTML, CSS, JavaScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }
    ])

    return (
        <div>
            {projects.map((image)=> (
                <img
                src={require(`../../assets/${image.name}.png`)}
                alt={image.name}
                key={image.name}
                />
            ))}
        </div>    
    )
}

export default ProjectList;