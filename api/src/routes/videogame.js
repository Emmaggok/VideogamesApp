const { Router } = require('express');
const {addVideogame, getVideogames, getVideogameById} = require('../controllers/VideogameController')

const router = Router();

router.get("/", getVideogames)
router.get("/:id", getVideogameById)
router.post("/add", addVideogame)

module.exports = router;