import React from 'react'

function Resume() {
  return (
    <section className='resume-section'>
        <h2 className='section-title'> 
            Resume
        </h2>

        <div className='resume rounded'>
            <h5>Download my <a href={require(`../../assets/resume.pdf`)} download="MH-resume" className='resume-link'>resume</a></h5>

            <div className='frontend-section'>
                <h3 className='mt-4'>
                    Frontend Proficiencies
                </h3>
                <div className='frontend-list'>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            JQuery
                        </li>
                        <li>
                            Responsive Design
                        </li>
                        <li>
                            React.js
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Materialize
                        </li>
                    </ul>
                </div>
            </div>

            <div className='backend-section'>
                <h3 className='mt-4'>
                    Backend Proficiencies
                </h3>
                <div className='backend-list'>
                    <ul>
                        <li>
                            AWS s3
                        </li>
                        <li>
                            APIs
                        </li>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li>
                            MySQL, Sequelize
                        </li>
                        <li>
                            MongoDB, Mongoose
                        </li>
                        <li>
                            REST
                        </li>
                        <li>
                            GraphQL
                        </li>
                    </ul>
                </div>
            </div>

            <div className='education-section'>
                <h3 className='mt-4'>
                    Education
                </h3>
                <p>
                    <strong>Full Stack Web Development Certificate</strong> <em>Columbia University</em>
                </p>
                <p>
                    Graduated: May 2022
                </p>
                <p>
                    <strong>Bachelor of Business Administration</strong> <em>Brooklyn College, CUNY</em>
                </p>
                <p>
                    Graduated: May 2015
                </p>
            </div>
        </div>

    </section>
  )
}

export default Resume