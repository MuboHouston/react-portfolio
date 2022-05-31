import React, {useState} from "react";
import ProjectList from '../ProjectList'

function Portfolio() {
    const [projects]= useState([
        {
            name: 'dinnection',
            type: 'Node, Express, MySQL, AWS s3',
            description: 'Dinnection is a full-stack social media web app for artists to connect, view, and promote contemporary art. After creating an account, users can post content on the app. User\'s posts are stored in an AWS S3 bucket and displayed on the main page.',
            website: 'https://nameless-harbor-84311.herokuapp.com/',
            github: 'https://github.com/Sensus0/dinnection'
        },
        {
            name: 'bota',
            type: 'React, Node, Express, Sequelize, GraphQL',
            description: 'An e-commerce app built to promote the Bota lifestyle and promote the sustainable and ethically sourced Bota products',
            website: 'https://botabotabota.herokuapp.com/',
            github: 'https://github.com/becketbowes/bota'
        },
        {
            name: 'budget',
            type: 'Progress Web App',
            description: 'Budget Tracker is a PWA that allows users keep track of their finances. Users are able to add expenses and deposits to their budget with or without a connection.',
            website: 'https://boiling-inlet-27031.herokuapp.com/',
            github: 'https://github.com/MuboHouston/budget-tracker'
        },
        {
            name: 'travelers',
            type: 'HTML, JS, CSS, Fetch API',
            description: 'Travelers is a web app for users planning travel within the United States during the COVID-19 pandemic. This app was created to help keep users up to date with the weather and COVID-19 cases, deaths, and risk.',
            website: 'https://hannahhan153.github.io/Travelers',
            github: 'https://github.com/hannahhan153/Travelers'
        },
        {
            name: 'tech-blog',
            type: 'MongoDB',
            description: 'Tech Blog is a CMS-style blog site where developers can publish their blog posts and comment on other developer\'s posts as well. Users can also edit and delete their posts and respond to other developers.',
            website: 'https://ancient-depths-16102.herokuapp.com/',
            github: 'https://github.com/MuboHouston/tech-blog'
        },
        {
            name: 'run-buddy',
            type: 'HTML, CSS, JavaScript',
            description: 'Run Buddy is a static web app that offers fitness training services.',
            website: 'https://mubohouston.github.io/run-buddy/',
            github: 'https://github.com/MuboHouston/run-buddy'
        }
    ])


    return(
        <div className="portfolio-container">
            <h1 className="section-title">
                Portfolio   
            </h1>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-5 m-2">
                        <ProjectList
                            src={require(`../../assets/${projects[0].name}.png`)}
                            keys={projects[0].name}
                            type={projects[0].type}
                            text={projects[0].description}
                            site={projects[0].website}
                            git={projects[0].github}
                        />
                        <ProjectList
                            src={require(`../../assets/${projects[1].name}.png`)}
                            keys={projects[1].name}
                            type={projects[1].type}
                            text={projects[1].description}
                            site={projects[1].website}
                            git={projects[1].github}
                        />
                        <ProjectList
                            src={require(`../../assets/${projects[2].name}.png`)}
                            keys={projects[2].name}
                            type={projects[2].type}
                            text={projects[2].description}
                            site={projects[2].website}
                            git={projects[2].github}
                        />
                        <ProjectList
                            src={require(`../../assets/${projects[3].name}.png`)}
                            keys={projects[3].name}
                            type={projects[3].type}
                            text={projects[3].description}
                            site={projects[3].website}
                            git={projects[3].github}
                        />
                        <ProjectList
                            src={require(`../../assets/${projects[4].name}.png`)}
                            keys={projects[4].name}
                            type={projects[4].type}
                            text={projects[4].description}
                            site={projects[4].website}
                            git={projects[4].github}
                        />
                        <ProjectList
                            src={require(`../../assets/${projects[5].name}.png`)}
                            keys={projects[5].name}
                            type={projects[5].type}
                            text={projects[5].description}
                            site={projects[5].website}
                            git={projects[5].github}
                        />
                </div>
        </div>
    )
}

export default Portfolio;