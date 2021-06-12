const porta = 3003;

const { response } = require('express');
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extends: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converter para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/

//será utilizado em todas as requisições
/*app.use((req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/