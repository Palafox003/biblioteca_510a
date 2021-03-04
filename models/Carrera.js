'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CarreraSchema=Schema({
    ncarrera:Number,
    nombre:String,
    logo:String
});

module.exports=mongoose.model('Carrera',CarreraSchema);