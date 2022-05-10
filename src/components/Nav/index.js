import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage, handlePageChange }) {
    

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage)
    }, [currentPage])

    return(
        <header className=''>
            <h1>
                <a 
                    className='header-name nav'
                    href='#about'
                    onClick={() => handlePageChange('About')}
                >
                    Mubo Houston
                </a>
            </h1>
            <nav>
                <ul className='nav'>
                   <li>
                        <a 
                            href='#about'
                            onClick={() => handlePageChange('About')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href='#portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                        >
                        Portfolio
                        </a>
                   </li>
                    <li>
                        <a
                            href='#contact'
                            onClick={() => handlePageChange('Contact')}
                        >
                        Contact
                        </a>
                   </li>
                   <li>
                        <a
                            href='#resume'
                            onClick={() => handlePageChange('Resume')}
                        >
                        Resume
                        </a>
                   </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;