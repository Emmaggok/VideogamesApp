const { Genre } = require("../db");
const axios = require('axios');
const {API_KEY} = process.env; 


async function preGenre(){
    try {
        let genres = (await axios.get("https://api.rawg.io/api/genres?key=" + API_KEY)).data.results
        
        genres = genres.map(e=>{
            return {
               id: e.id,
               name: e.name,
            }
        }) 
      genres = await Promise.all(genres.map(e=> Genre.findOrCreate({where:e}))) 
      return "Géneros cargados exitosamente" 
     } catch (error) {
        return "No se pudo cargar los géneros"
     }
}

async function getGenres(req, res, next){
    try {
       let genres = await Genre.findAll()
     res.json(genres)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getGenres,
    preGenre
}