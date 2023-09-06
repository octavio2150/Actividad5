var productoscontroller = {}

productosController.Guardar = function(request,response){
    response.json({mensaje: "producto guardado"})
}

module.exports.productoscontroller = productosController

var post = {
    codigo: request.body.codigo,
    nombre: request.body.nombre,
    descripcion: request.body.descripcion,
    precio: request.body.precio,

}