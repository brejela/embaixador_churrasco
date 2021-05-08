var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './static')));//Volta a pasta raiz da aplicação e combina com a pasta static

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, './static/index.html'));//A resposta que o usuario vai receber vai ser a nossa pagina index
});//resquest é a solicitação que vem do navegador e response é a resposta ou retorno

app.listen(8000, function(){
    console.log('O servidor está rodando na porta 8000');
});