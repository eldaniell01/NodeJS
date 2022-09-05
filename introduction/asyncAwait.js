async function asincronismo2(nombre){
    return new Promise(function(resolve, reject){
        console.log('hoola');
        setTimeout(()=>{
            console.log('hola '+ nombre);
            resolve(nombre);
        }, 1000)
    })
    
}
async function hablar(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('bla, bla, bla...');
            resolve('hay un error');
        }, 1000);
    })
    
}

async function adio (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('adios '+nombre);
            resolve();
        }, 1000)
    })
    
}


async function main(){
    let nombre = await asincronismo2('Daniel');
    await hablar();
    await adio(nombre)
}

main()