const { Router } = require('express');
const dogControllers = require('../controllers/dogControllers');
const dogRouter=Router()

dogRouter.get('/',dogControllers.getDogs)
dogRouter.get('/:id',dogControllers.getDog)
dogRouter.post('/',dogControllers.createDog)

module.exports=dogRouter