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
/*
app.get('/ejemplo',(req,res)=>{
    console.log("Hola mundo en Express");

    //return res.status(200).send('<ul><li>Federico Aparicio Sanchez</li><li>Jorge Alberto Hernandez</li><li>Israel Palafox Morales</li></ul>');
    return res.status(200).send({
        ncarrera:10,
        nombre:"TI área Desarrollo de software",
        logo:"ti2.png"
    });
});
*/
//Exportar modulo
module.exports=app;