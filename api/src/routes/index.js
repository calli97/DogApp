const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogControllers=require('../controllers/dogControllers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs',dogControllers.getDogs)
router.get('/dogs/:id',dogControllers.getDog)
router.get('/init',dogControllers.init)

module.exports = router;
