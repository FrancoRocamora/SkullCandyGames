const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const VgamesHandlers= require('../Handlers/vGamesHandlers.js')
const GenresHandlers = require('../Handlers/GenresHandlers.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', VgamesHandlers)
router.use('/genres', GenresHandlers)





module.exports = router;
