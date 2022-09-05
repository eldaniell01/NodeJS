// function asincronismo(miCallback){
//     console.log('hoola');
//     setTimeout(()=>{
//         console.log('asindronismo');
//         miCallback();
//     }, 3000)
// }

// asincronismo(function(){
//     console.log('terminando proceso')
// });

function asincronismo2(nombre, miCallback){
    console.log('hoola');
    setTimeout(()=>{
        console.log('hola '+ nombre);
        miCallback();
    }, 3000)
}

function adio (nombre, otroCallback){
    setTimeout(()=>{
        console.log('adios '+nombre);
        otroCallback();
    }, 3000)
}


asincronismo2("hola daniel",function(){
    adio('Daniel', function(){
        console.log('terminando proceso')
    }) 
});