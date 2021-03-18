'use strict'

var express=require('express');
var CarreraController=require('../controllers/CarrerasController');

var router=express.Router();

//--------------------------------------------------------------------------
var multipart=require('connect-multiparty');
var md_upload=multipart({uploadDir:'./upload/carreras'}); // middleware

//---------------------------------------------------------------------------
//-----Rutas para CarrerasController-----------------------------------------
router.post('/carreras',CarreraController.datosCarrera);
router.post('/guardarcarrera',CarreraController.guardarCarrera);
router.get('/ruta2',CarreraController.otroEjemplo);
router.get('/carreras/:numero?',CarreraController.listaCarreras);
router.get('/carrera/:carrera_id',CarreraController.buscarCarrera);
router.put('/carrera/:carrera_id',CarreraController.actualizarCarrera);
router.delete('/carrera/:carrera_id',CarreraController.eliminarCarrera);
router.post('/cargarImagen/:carrera_id',md_upload,CarreraController.cargarImagen);
router.get('/getImagen/:imagen',CarreraController.getImagen);
//----------------------------------------------------------------------------
//--------Rutas para UsuariosController---------------------------------------


module.exports=router;
