process.on('beforeExit',()=>{
    console.log('el proceso acabo')
})

process.on('exit',()=>{
    console.log('el proceso acabo')
})

process.on('unhandleException', (error, origen)=>{
    console.log(" error")
    setTimeout(()=>{
        console.log('esto es viernes')
    }, 2000)
}); 

funciondssd()
console.log('el proceso acabo')

