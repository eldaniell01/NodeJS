function asin(callback) {
    setTimeout(()=>{
        try {
            let a = 3 +z;
            callback(null, a);
        } catch (error) {
            callback(error)
        }
    }, 1000)
}

try {
    asin((error, dato)=>{
        if (error){
            console.error(error);
            //return false;
            throw error;
        }
        console.log(dato)
    })
} catch (error) {
    console.log(error)
}