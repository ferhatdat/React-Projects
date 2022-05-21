import React from 'react'
import './card.css'

const Card = ({veri}) => {
    return (
        <div className="container-fluid">
            <div className='row'>
            {veri.map((item) => {
                const {title, image, desc} = item
                return (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card bg-dark text-light p-3 m-2 myCSS">
                            <h5 className="card-title my-4 fs-1">{title}</h5>
                            <img src={image} className="card-img-top myImage size1" alt={title} />
                            <div className="card-body display desc">
                                <p className="card-text">{desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Card