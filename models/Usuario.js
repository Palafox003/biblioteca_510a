'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UsuarioSchema=Schema({
    matricula:String,
    nombre:String,
    paterno:String,
    materno:String,
    correo:String,
    telefono:String,
    direcciones:[{
        pais:String,
        estado:String,
        ciudad:String,
        cp:Number,
        descripcion:String
    }]
});

module.exports=mongoose.model('Usuario',UsuarioSchema);