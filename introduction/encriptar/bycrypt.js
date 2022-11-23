const bcrypt = require('bcrypt');

const password = '1234segura';

bcrypt.hash(password, 4, (err,hash)=>{
    console.log(hash)
    bcrypt.compare('password', hash, (error, res)=>{
        console.log(res)
    })
})