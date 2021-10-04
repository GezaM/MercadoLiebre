const express = require('express');
const app = express();

/* Config express */
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
/* Register */
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + './views/register.html');
});
/* Login */
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + './views/login.html');
});
app.post('/login', (req,res)=>{
    res.send('Ya te logueaste campeón');
});

app.listen(process.env.PORT || 3000, function () { 
    console.log('Servidor funcionando en el puerto 3000')});