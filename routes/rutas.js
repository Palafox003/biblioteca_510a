'use strict'

var express=require('express');
var CarreraController=require('../controllers/CarrerasController');

var router=express.Router();

//---------------------------------------------------------------------------
//-----Rutas para CarrerasController-----------------------------------------
router.post('/carreras',CarreraController.datosCarrera);
router.post('/guardarcarrera',CarreraController.guardarCarrera);
router.get('/ruta2',CarreraController.otroEjemplo);
router.get('/carreras/:numero?',CarreraController.listaCarreras);
router.get('/carrera/:carrera_id',CarreraController.buscarCarrera);
router.put('/carrera/:carrera_id',CarreraController.actualizarCarrera);
router.delete('/carrera/:carrera_id',CarreraController.eliminarCarrera);
//----------------------------------------------------------------------------
//--------Rutas para UsuariosController---------------------------------------


module.exports=router;
