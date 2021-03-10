'use strict'

//Cargar modulos de node para crear el servidor web
var express=require('express');
var bodyParser=require('body-parser');


var app=express();

// Cargar Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rutas web
var rutas=require('./routes/rutas');

app.use('/',rutas);
//Exportar modulo
module.exports=app;