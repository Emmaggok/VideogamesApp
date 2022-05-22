import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getVideogame, removeVideogame } from '../Redux/actions/index.js'


function Character(props) {
    
    const { id } = props.match.params
    const { videogame } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getVideogame(id))
        return()=>{
            dispatch(removeVideogame())
        }
    },[dispatch,id])

const goToBack = ()=>{
    history.goBack()
}
    //console.log("videogames", videogame.genres)
    //let videogames = videogame.genres;
    return (
        <div>
            <button onClick={goToBack}>⏪</button>
            {

                videogame?.name ? 
                <>
                    <img src={videogame.background_image} alt=""/>
                    <p>{videogame.name}</p>
                    <p>{videogame.genres[0].name}</p>
                    {videogame.description}
                    <p>{videogame.released}</p>
                    <p>{videogame.rating}</p>
                    
                </>
                :
                <div>Cargando...</div>
            }
        </div>
    )
}

export default Character