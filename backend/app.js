const express = require('express')
const path = require('path')
var professor = require('./routes/rotas-professor');

const app = express()

app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/view/login.html')
})

app.get('/aluno-0001', (req, res) => {
    res.sendFile(__dirname+'/view/aluno-0001.html')
})

app.get('/turma-biologia', (req, res) => {
    res.sendFile(__dirname+'/view/turma.html')
})

app.get('/material-biologia', (req, res) => {
    res.sendFile(__dirname+'/view/gerenciar-material-de-aula.html')
})

app.get('/turma-biologia-0002', (req, res) => {
    res.sendFile(__dirname+'/view/turma-0002.html')
})

app.get('/aluno-0002', (req, res) => {
    res.sendFile(__dirname+'/view/aluno-0002.html')
})

app.get('/turma-biologia-0003', (req, res) => {
    res.sendFile(__dirname+'/view/turma-0003.html')
})

app.get('/aluno-0003', (req, res) => {
    res.sendFile(__dirname+'/view/aluno-0003.html')
})

app.use('/use-professor', professor);

app.listen(3000, () => {
    console.log('Servidor de pé!')
})