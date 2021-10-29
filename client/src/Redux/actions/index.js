import axios from 'axios'
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_ALL_GENRES = "GET_ALL_GENRES"
export const SET_NAME = "SET_NAME"
export const SET_ORDER = "SET_ORDER"
export const SET_PAGE = "SET_PAGE"
export const GET_VIDEOGAME = "GET_VIDEOGAME"
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME"
export const REMOVE_VIDEOGAME = "REMOVE_VIDEOGAME"



export const createVideogame = (videogame)=> {
    return (dispatch)=>{
        axios.post(`http://localhost:3001/videogames/add`,videogame)
        .then(response =>{
            return dispatch({
                type: CREATE_VIDEOGAME
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getGenres = ()=> {
    return (dispatch)=>{
        axios.get(`http://localhost:3001/genres/`)
        .then(genres =>{
            return dispatch({
                type: GET_ALL_GENRES,
                payload: genres.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getVideogame = (id)=>{
    return async (dispatch)=>{
        try {
            const result = await axios.get(`http://localhost:3001/videogames/${id}`)
            return dispatch({
                type: GET_VIDEOGAME,
                payload: result.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}
export const getAllVideogames = ({page, order, name})=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/videogames?page=${page?page:1}&order=${order?order:""}&name=${name?name:""}`)
        .then(videogames =>{
            return dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: videogames.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const setName = (name)=>{
    return{
        type: SET_NAME,
        payload: name
    }
}
export const setPage = (page)=>{
    return{
        type: SET_PAGE,
        payload: page
    }
}
export const setOrder = (order)=>{
    return{
        type: SET_ORDER,
        payload: order
    }
}
export const removeVideogame = ()=>{
    return{
        type: REMOVE_VIDEOGAME,
        payload: {}
    }
}


