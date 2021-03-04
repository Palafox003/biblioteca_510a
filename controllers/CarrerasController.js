'use strict'

var validator=require('validator');
var Carrera=require('../models/Carrera');

var controller={
    datosCarrera:(req,res)=>{
        return res.status(200).send({
            ncarrera:10,
            nombre:"TI área Desarrollo de software",
            logo:"ti2.png"
        });
    },
    otroEjemplo:(req,res)=>{
        return res.status(200).send({
            message:'Este es otro método del controllador de carreras'
        });
    }
};

module.exports=controller;