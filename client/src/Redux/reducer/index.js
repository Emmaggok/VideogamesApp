import {
    GET_ALL_VIDEOGAMES,
    SET_NAME,
    SET_ORDER,
    SET_PAGE,
    GET_VIDEOGAME,
    REMOVE_VIDEOGAME,
    GET_ALL_GENRES,
    }from '../actions/index.js'

    const initialState ={
        videogames:[],
        videogame:{},
        genres:[],
        name:"",
        order:"",
        page:1
    }

    
    export default function reducer (state = initialState, {type, payload}){

        switch (type) {
           
            case GET_ALL_VIDEOGAMES:
                return {
                   ...state,
                    videogames: payload
                }
            case SET_NAME:
                return{
                    ...state,
                    name: payload
                }
            case SET_PAGE:
                return{
                    ...state,
                    page: payload
                }
            case SET_ORDER:
                return{
                    ...state,
                    order: payload
                }
            case GET_VIDEOGAME:
                return{
                    ...state,
                    videogame: payload
                }
            case REMOVE_VIDEOGAME:
                return{
                    ...state,
                    videogame:payload
                }
            case GET_ALL_GENRES:
                return{
                    ...state,
                    genres: payload
                }

            default:
                return state
        }
    
    }