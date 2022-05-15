import React from 'react'

function About() {
    return(
        <section className='about-section'>
            <h2 className='section-title'> 
                About
            </h2>

            <div id='about-me' className='about-flex rounded'>
                <div className='profile-img'>
                    <img src={require(`../../assets/about-pic.jpg`)}
                    alt='professional-pic'
                    key='professional-pic' />
                </div>

                <div className='summary'>
                    <p>
                        Full stack web developer passionate about web accessibility, performance, and usability. Prior to being a developer, I provided services to adults and children in need for six years. My desire to help others is what drives me to make content that matters and have a positive impact on the world. I recently obtained a certificate in full stack web development from Columbia University where I developed my skills in HTML, CSS, JavaScript, APIs, Node.js, React.js, Express.js, AWS S3, and MySQL. With each project, my goal is to improve overall user experience. I applied aspects of UX in a recent group project where I worked with a team of three to create a social media app for experienced and up-and-coming artist that helps users showcase their art and connect with other artists. I am excited to join a fast paced and hard-working team where I can utilize my skills to help improve user experience and web accessibility.
                        <br />
                        <br />
                        I develop websites with HTML, CSS, JavaScript, JQuery, Bootstrap, Materialize, AWS S3, web APIs, and Node.js, focusing on accessibility, performance, and usability. When I'm not coding, you can find me biking, boxing, spending time with family, or learning new programing languages.
                    </p>

                    <div>
                        <h4>Currently Working On:</h4>
                        <p>Gaining additional skills in AWS.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;