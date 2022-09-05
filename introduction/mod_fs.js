const fs = require('fs');


function leer(rut, cb) {
    fs.readFile(rut, (err, data)=>{
        console.log(data.toString());
    })
}

//leer(__dirname+"/archivo.txt");

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (error)=>{
        if(error){
            console.log("no he podido escribirlo", error);
        }else{
            console.log("escrito correctamente");
        }
    })
}

//escribir(__dirname+'/archivo2.txt', 'archivo nuevo', console.log)

function eliminar(ruta, cb) {
    fs.unlink(ruta,cb);
}

eliminar(__dirname +'/archivo.txt', console.log);