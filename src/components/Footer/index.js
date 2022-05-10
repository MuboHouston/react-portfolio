import React from 'react'

function Footer() {
  return (
    <section>
        <div className='social-media'>
            <div className='social-icons'>
                <a 
                    className='social-icon-link'
                    href='https://www.linkedin.com/in/mubohouston/'
                    target='blank'
                    aria-label='LinkedIn'
                >
                    <i className='fab fa-linkedin' />
                </a>
                <a 
                    className='social-icon-link'
                    href='https://github.com/MuboHouston'
                    target='blank'
                    aria-label='Github'
                >
                    <i className='fab fa-github'></i>
                </a>
                <a 
                    className='social-icon-link'
                    href='https://twitter.com/iam_mhouston'
                    target='blank'
                    aria-label='Twitter'
                >
                    <i className='fab fa-twitter'></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer