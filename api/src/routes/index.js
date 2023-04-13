const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require('./dogs');
const temperamentsRouter = require('./temperaments');

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/dogs',dogControllers.getDogs)
// router.get('/dogs/:id',dogControllers.getDog)
// router.post('/dogs',dogControllers.createDog)

router.use('/dogs',dogRouter)
router.use('/temperaments',temperamentsRouter)
//router.get('/temperaments',temperamentControllers.getTemperaments)


module.exports = router;