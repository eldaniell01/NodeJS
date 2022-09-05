const hhtp= require('http');


hhtp.createServer(router).listen(3000)
function router(req, res){
    console.log("nueva peticion");
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('hola 1');
            res.end();
            break;
        
        default:
            res.write('error 404');
            res.end();
    }
    // res.writeHead(201, {'Content-Type': 'text/plain'})
    // res.write("http node")
    // res.end()
}