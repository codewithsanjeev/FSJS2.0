import React from 'react'

function Cards(props) {
    return (
        <>
            <div className="cards">
                <img src={props.url} alt="Person in Card" className="card-image" />
                <h3 className="card-title">{props.name}</h3>
                <p className="card-description">
                    {props.desc}
                </p>
            </div>

        </>
    )
}

export default Cards