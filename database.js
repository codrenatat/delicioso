const mongoose = require("mongoose");
const mongoConnection = "mongodb+srv://admin:admin@myapp.veq7s4n.mongodb.net/";

let db = mongoose.connection;

db.on("connecting",()=>{
    console.log("Conectando a la base...");
    console.log(mongoose.connection.readyState);
});
db.on("connected",()=>{
    console.log("Conectado a la base exitosamente");
    console.log(mongoose.connection.readyState);
});

mongoose.connect(mongoConnection);

//exportamos la coleccion de los perros que usaremos mas adelante
module.exports = db;