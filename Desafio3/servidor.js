const express = require('express')
const app = express()
const puerto = 8080
let visitas = 0

app.get('/',(req, res)=>{
    res.send(`<h1 style="color: blue">Bienvenido al servidor express</h1>`)
})
app.get('/visitas',(req, res)=>{
    visitas++
    res.send(`El servidor tuvo ${visitas} visitas`) 

})
app.get('/fyh',(req, res)=>{
    date = new Date();
    fyh = date.getDate() + '/' + ( date.getMonth() + 1 ) + '/' + date.getFullYear() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    res.send(`fyh: ${fyh} $`)
})
app.listen(puerto, () =>{
    console.log(`Servidor escuchando en ${puerto}`)
})