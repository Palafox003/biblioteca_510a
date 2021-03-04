'use strict'

//Cargar modulos de node para crear el servidor web
var express=require('express');
var bodyParser=require('body-parser');


var app=express();

// Cargar Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rutas web
app.get('/ejemplo',(req,res)=>{
    console.log("Hola mundo en Express");
});

//Exportar modulo
module.exports=app;