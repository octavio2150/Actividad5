var express = require("express")
global.app = express()
global.config = require("./config.js").config

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const law = require ("./devconeccion.js")
law()
app.listen(3000, function(){
    console.log("servidor funcionando por el puerto ")
})

