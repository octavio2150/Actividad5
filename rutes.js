const { config } = require("./config")

var productosController = require("./controladores/productoscontroller.js")

app.post("/productos/Guardar",function(request,response){
    productosController.guardar(request,response)
})

var datos =  []

app.post("/Productos/Guardar", function(request, response){
var Productos = request.body.Productos
datos.push({name: Productos})
response.json({mensaje: "el producto quedo guardato"})
})

app.post("/Productos/Modificar", function(request, response){
    var posicion = request.body.posicion
    var nuevonombre = request.body.nuevonombre
    datos[position].name = nuevonombre
    response.json({mensaje: "el producto quedo modificado"})
})

app.post("/Productos/eliminar", function(request, response){
    var posicion = request.body.posicion
    var nuevonombre = request.body.nuevonombre
    datos.splice(posicion1)
    response.json({mensaje: "el producto quedo eliminado"})
})


app.get("/Productos/listardatos", function(request, response) {
    response.json({datos: datos})
})