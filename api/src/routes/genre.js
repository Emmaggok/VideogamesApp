const { Router } = require('express');
const router = Router();
const {getGenres} = require('../controllers/GenreController')

router.get("/", getGenres);

module.exports = router;