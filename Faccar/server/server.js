//npm install express
//npm install nodemon
//atualizar o packge.json 
//abaixo da linha test, dentro do methodo Script acresentar o comando abaixo
//"Methodos" : "nodemon Methodos/app.js"
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;
const hostname = "192.168.100.65";

//Acessar site da Atlas Mongo DB - Criar uma conta e criar um cluster Free 
mongoose.connect('mongodb+srv://Gabriel:tads2020@cluster0.hdqeh.mongodb.net/users?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//imprime no console qua a porta e qual o server que esta rodando aplicação
app.listen(port, hostname,()=>{
    console.log(`Servidor rodando na porta ${port} em ${hostname}`);
});