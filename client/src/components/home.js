import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllVideogames ,setPage} from "../Redux/actions/index.js";
import Card from "./Card.js"



const Home = () => {
    const dispatch = useDispatch()
    const { videogames, name, order, page } = useSelector(state=> state)
    
   
    
    useEffect(()=>{
       dispatch(getAllVideogames({})) 
    },[dispatch])

    const changePage = (page)=>{
        dispatch(getAllVideogames({page,name,order}))
        dispatch(setPage(page))
    }
    
    return (
        <div>
            {
                videogames?.result?.length>0 && videogames.result.map((e)=>{
                   return <Card image={e.background_image} name={e.name} id={e.id} key={e.id}/>
                })
            }
                <button disabled={page -1 === 0} onClick={()=> {changePage(page -1)}}>previous</button>
                    <label>{page}</label>
                <button disabled={videogames?.count <= (page * 5)} onClick={()=>{changePage(page +1)}}>next</button>
            
        </div>
    )
}

export default Home