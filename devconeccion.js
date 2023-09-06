const mongoose = require ("mongoose")
function law (){
    mongoose.connect("mongodb+srv://octavio2150:Aguila55@cluster0.s9oi6by.mongodb.net/?retryWrites=true&w=majority")
    .then((res)=> {
        console.log("conexion Correcta")
    }).catch((res)=> {
        console.log("Error de Conexión")
    })
}
module.exports= law