import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getGenres,createVideogame } from '../Redux/actions/index.js'


function Form() {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state)
    const [formulario,setFormulario] = React.useState({
        name:"", 
        description:"",
        released:"", 
        rating:"", 
        platforms:[], 
        genres: []
    })
    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])
    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(createVideogame(formulario))
        setFormulario({
            name:"", 
            description:"",
            released:"", 
            rating:"", 
            platforms:[],
            genres: []
        })
    }
    const handleOnChange = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    //const handleOnChangeEspecial = (e)=>{
    //    if(formulario.episode.includes(e.target.value)){
    //       let newEpisdoes = formulario.episode.filter(ep => ep !== e.target.value)
    //        setFormulario({
    //            ...formulario,
    //           episode: newEpisdoes
    //        })
    //    }else{
    //        setFormulario({
    //            ...formulario,
    //            episode: [...formulario.episode, e.target.value]
    //        })
    //    }
    //}
    return (
        <form onSubmit={onSubmit}>
            <label >Name</label>
            <input value={formulario.name} onChange={handleOnChange} name="name" type="text" />
            <label >Description</label>
            <input value={formulario.description} onChange={handleOnChange} name="description" type="text" />
            <label >Launch</label>
            <input value={formulario.released} onChange={handleOnChange} name="released" type="text" />
            <label >Rating</label>
            <input value={formulario.rating} onChange={handleOnChange} name="rating" type="float" />
            <label >Platforms</label>
            <input value={formulario.platforms} onChange={handleOnChange} name="platforms" type="array" />
            <select onChange={handleOnChange} name="Genres"  >
            {
                genres.length > 0 &&
                genres.map(e =>(
                    <option key={e.id} value={e.id}>{e.name}</option>
                ))
            }
            </select>
            
            <input type="submit" value="Create"/>
            {/* {
                formulario?.episode.length > 0 &&
                formulario.episode.map(e =>(
                    <label>{e}</label>
                ))
            } */}
        </form>
    )
}

export default Form