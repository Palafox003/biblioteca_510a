'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=3900;

mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/biblioteca',{useNewUrlParser:true}).then(()=>{
    console.log('La conexión a la base de datos biblioteca se realizo con exito.');

    app.listen(port,()=>{
        console.log('Servidor corriendo en localhost puesto: '+port);
    });
});