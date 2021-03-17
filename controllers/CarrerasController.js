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
/*
        return res.status(200).send({
            status:'success',
            message:'Datos guardados',
            vncarrera:validate_ncarrera,
            vnombre:validate_nombre,
            vlogo:validate_logo,
            carrera:datos
        });
*/
    },
    listaCarreras:(req,res)=>{

        var numero=parseInt(req.params.numero,10);
        var consulta=Carrera.find({});

        if(numero || numero!=undefined){
            consulta=consulta.limit(numero);
        }


        consulta.exec((err,carreras)=>{
            if(err){
                return res.status(500).send({
                    status:'eror',
                    message:'Error a consultar la base de datos.',
                    x:numero
                });
            }
            
            if(!carreras){
                return res.status(404).send({
                    status:'eror',
                    message:'No se encontro información en la base de datos.'
                });
            }

            return res.status(200).send({
                status:'success',
                message:'Imprimir lista de carreras',
                carreras:carreras
            });

        });
    },
//----------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
    buscarCarrera:(req,res)=>{
        var carrera_id=req.params.carrera_id;


        if(!carrera_id || carrera_id==null){
            return res.status(404).send({
                status:'error',
                message:'El valor del ID es obligatorio.'
            });
        }

        Carrera.findById(carrera_id,(err,carrera)=>{
            if(err || !carrera){
                return res.status(404).send({
                    status:'error',
                    message:'El al consultar la base de datos.'
                }); 
            }

            return res.status(200).send({
                status:'success',
                message:'Buscar carrera por ID.',
                carrera:carrera
            });

        });    
    },
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
    actualizarCarrera:(req,res)=>{

        var carrera_id=req.params.carrera_id;
        var datos=req.body;

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

        if(validate_ncarrera && validate_nombre && validate_logo){
            Carrera.findByIdAndUpdate({_id:carrera_id},datos,{new:true},(err, carreraUpdated)=>{
                if(err || !carreraUpdated){
                    return res.status(404).send({
                        status:'error',
                        message:'Faltan datos para actualizar.'
                    });
                }

                return res.status(200).send({
                    status:'success',
                    message:'Datos actualizados.',
                    carrera:carreraUpdated
                });
            });
        }
    },
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//Eliminar carrera
    eliminarCarrera:(req,res)=>{
        var carrera_id=req.params.carrera_id;

        Carrera.findByIdAndDelete({_id:carrera_id},(err,carraraRemoved)=>{
            if(err){
                return res.status(500).send({
                    status:'eror',
                    message:'Error el eliminar en la base de datos.',
                    x:numero
                });
            }
            
            if(!carraraRemoved){
                return res.status(404).send({
                    status:'eror',
                    message:'No se encontro la información a eliminar.'
                });
            }

            return res.status(200).send({
                status:'success',
                message:'Datos Eliminados de forma correcta.',
                carrera:carraraRemoved
            });
        });
    }
};

module.exports=controller;