const { Videogame, Genre, Op} = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const {API_KEY} = process.env;

const addVideogame = (req,res, next)=>{
    const { name, description, launch, rating, platforms, genres } = req.body;
    let videogame = {
        name,
        description,
        launch,
        rating,
        platforms
    }

    Videogame.create(videogame)
    .then(videogame=>{
        videogame.addGenre(genres)
      res.json({...videogame, genres})
    })
    .catch((error)=> next(error))
      
};

async function getVideogames(req, res, next){
    try {
        let {
            name,
            order,
            page
        } = req.query

        
        let apiVideogames
        let dbVideogames
        let allVideogames=[]
        page = page ? page : 1 
        const gamesXPage = 15;
        //#region NAME
        if(name && name !== ""){
            apiVideogames = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results
            dbVideogames = await Videogame.findAll({
                where:{
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            allVideogames= dbVideogames.concat(apiVideogames)
        }
        else{
            
            apiVideogames = (await axios.get('https://api.rawg.io/api/games?key='+ API_KEY)).data.results
            dbVideogames= await Videogame.findAll({include: Genre})

            allVideogames= dbVideogames.concat(apiVideogames)
        }
        //#endregion
        
        //#region ORDER
        if(order === "asc" || !order || order === ""){
            allVideogames = allVideogames.sort((a,b) =>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }else{
            allVideogames = allVideogames.sort((a,b) =>{
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        //#endregion

        //#region PAGE
            let result = allVideogames.slice((gamesXPage * (page -  1)) , (gamesXPage * (page -  1)) + gamesXPage )
        //#endregion
        
        return res.send({
            result: result, 
            count: allVideogames.length
        })

    } catch (error) {
        next(error)
    }
}

async function getVideogameById(req,res,next){
    try {
        const { id } = req.params
        let game;
        if(isNaN(id)){
            game = await Videogame.findByPk(id)
        }else{
            //API
            game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            game = game.data
        }

        return res.json(game)
    } catch (error) {
        next(error)
    }
}



module.exports = {

    addVideogame,
    getVideogames,
    getVideogameById
}