function asincronismo2(nombre, miCallback){
    console.log('hoola');
    setTimeout(()=>{
        console.log('hola '+ nombre);
        miCallback(nombre);
    }, 1000)
}
function hablar(callbackhablar) {
    setTimeout(()=>{
        console.log('bla, bla, bla...');
        callbackhablar();
    }, 1000);
}

function adio (nombre, otroCallback){
    setTimeout(()=>{
        console.log('adios '+nombre);
        otroCallback();
    }, 1000)
}

function conversacion(nombre, veces, callback) {
    
    if(veces>0){
        hablar(function(){
            
            conversacion(nombre, --veces, callback)
        })
    }else{
        adio(nombre, callback);
    } 
}


asincronismo2("Daniel", function(nombre){
    console.log(nombre)
    conversacion(nombre, 3, function(){
        
        console.log('terminando proceso')
    })
})

// asincronismo2("hola daniel",function(){
//     adio('Daniel', function(){
//         console.log('terminando proceso')
//     }) 
// });