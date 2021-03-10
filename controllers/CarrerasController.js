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
    listaCarreras:(req,res)=>{
        return res.status(200).send({
            message:'Imprimir la lista de carreras existentes.'
        });
    },
    otroEjemplo:(req,res)=>{
        return res.status(200).send({
            message:'Este es otro método del controllador de carreras'
        });
    },
    guardarCarrera:(req,res)=>{
// Declaración de variables y datos del formulario
        var datos=req.body;
        //console.log(datos);

// Validación de los datos del formulario con validator
        try{
            var validate_ncarrera=!validator.isEmpty(datos.ncarrera);
            var validate_nombre=!validator.isEmpty(datos.nombre);
            var validate_logo=!validator.isEmpty(datos.logo);
        }catch(err){
            return res.status(200).send({
                status:'error',
                message:'Faltan datos por enviar.'
            });
        }
/*
        if(validate_ncarrera && validate_nombre && validate_logo){
            return res.status(200).send({
                status:'success',
                message:'Datos validados y guardados',
            });
        }else{
            return res.status(200).send({
                status:'error',
                message:'Error al validar la información y al guardar.',
            });
        }
*/
// Insertar en la base de datos mongodb
        var carrera=new Carrera; //Creando el objeto a guardar
// Asignar valores al objeto carrera
        carrera.ncarrera=datos.ncarrera;
        carrera.nombre=datos.nombre;
        carrera.logo=datos.logo;
// Guardar la carrera
        carrera.save((err,carreraStored)=>{
            if(err || !carreraStored){
                return res.status(404).send({
                    status:'error',
                    message:'Ocurrio un error al guardar la carrera.'
                });
            }

            return res.status(200).send({
                status:'success',
                carrera:carreraStored
            });
        });

// Retornar una respuesta correcta a la petición post
        return res.status(200).send({
            status:'success',
            message:'Datos guardados',
            vncarrera:validate_ncarrera,
            vnombre:validate_nombre,
            vlogo:validate_logo,
            carrera:datos
        });
    }
};

module.exports=controller;