const mongoose = require('mongoose');



const db_connection = () => {
    mongoose.connect('mongodb+srv://zahraznacef:admin@cluster0.ovd3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then( () =>{
        console.log("Data_base connected")
    })
    .catch( () =>{
        console.log("Error")
    })
}



module.exports = db_connection;