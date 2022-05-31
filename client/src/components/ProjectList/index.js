import React from "react";
import {capitalizeFirstLetter} from '../../utils/helpers'

function ProjectList(props) {
const { src, keys, text, type, site, git } = props

    return (
        <div className="col portfolio-cards">
            <div className="cards-container">
                <div className="card">
                    <img
                        className="card-img-top"
                        alt={keys}
                        src={src}
                        key={keys}
                    />
                </div>
                <div className="cards-links">
                    <a className="cards-site" target='blank' href={site}>{capitalizeFirstLetter(keys)}</a>
                    <a className="cards-git" target='blank' href={git}><i className='fab fa-github'></i></a>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{type}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>    
    )
}

export default ProjectList;
