let suman = 0;

console.time('bucle')
for(let i = 0; i<1000000;i++){
    suman++; 
}

console.time('asin');
asin()
    .then(()=>{
        console.timeEnd('asin');
    })

console.timeEnd('bucle')


function asin() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('terminar proceso ')
            resolve();
        })
    })
}