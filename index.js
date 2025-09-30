 const express = require('express')
 const app = express()

 const path = require('path')

 app.use(express.static('public'))

 const PORT = process.env.PORT || 8000

 app.listen(PORT, function() {
    console.log('aplicacion disponible en puerto ' + PORT)
 })

 app.listen(8000, function() {
    console.log('aplicacion disponible en puerto 8000')
 })

 app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
 })