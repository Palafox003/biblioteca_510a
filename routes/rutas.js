'use strict'

var express=require('express');
var CarreraController=require('../controllers/CarrerasController');

var router=express.Router();

router.post('/carreras',CarreraController.datosCarrera);
router.get('/ruta2',CarreraController.otroEjemplo);

module.exports=router;
