import React from "react"
import { NavLink } from "react-router-dom";

const Card = ({image, name,id,genres}) => {
    return (
        <div>
            <img src={image} alt={name}/>
            <p>{genres}</p>
            <NavLink to={`/videogame/${id}`}>{name}</NavLink>
        </div>
    )
}

export default Card;