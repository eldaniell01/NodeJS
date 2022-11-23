const fs = require('fs');
const { Transform } = require('stream');
const stream = require('stream');
const util = require('util');
let data = '';
let readdable = fs.createReadStream(__dirname+'/input.txt');

// readdable.setEncoding('utf8')
// readdable.on('data', (chunk)=>{
//     data +=chunk
// })

// readdable.on('end', ()=>{
//     console.log(data)
// });

// process.stdout.write('hola');

const transform = stream.Transform;

function Mayus() {
    transform.call(this)

}
util.inherits(Mayus, transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunkmayus = chunk.toString().toUpperCase()
    this.push(chunkmayus);
    cb()
}

let myus = new Mayus();
readdable
    .pipe(myus)
    .pipe(process.stdout);