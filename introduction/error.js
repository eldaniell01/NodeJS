function otra(){
   errores();
}

function errores() {
    return 3+Z;
}

function asincronico(cb){
    setTimeout(()=>{
        try {
            return 3+Z;
        } catch (error) {
            console.error('error en asincrinismo');
            cb(error)
        }
        
    })
}

try{
    asincronico((error)=>{
        console.log(error.message)
    });
}catch(err){
    console.error('error '+ err)
    console.error(err)
}

