function asincronismo2(nombre){
    return new Promise(function(resolve, reject){
        console.log('hoola');
        setTimeout(()=>{
            console.log('hola '+ nombre);
            resolve(nombre);
        }, 1000)
    })
    
}
function hablar(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('bla, bla, bla...');
            reject('hay un error');
        }, 1000);
    })
    
}

function adio (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('adios '+nombre);
            resolve();
        }, 1000)
    })
    
}

console.log('iniciando proceso');
asincronismo2('daniel')
    .then(hablar)
    .then(adio)
    .then((nombre)=>{
        console.log('terminando proceso');
        
    })
    .catch(error=>{
        console.error('error maximo '+error )
    })