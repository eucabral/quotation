const express = require('express')
const app = express()

const quotationRoutes = require('./routes/quotationRoute')

app.use((req,res,next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Header,Origin,X-Request-With,Content-Type,Accept,Autorization')
    if(req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'GET')
    }
    next()
})

app.use('/quotation', quotationRoutes)

//quando nao encontra rota
app.use((req,res,next) => {
    const erro = new Error('Not found')
    erro.status = 404
    next(erro)
})

app.use((error,req,res,next) => {
    res.status(error.status || 500)
    return res.send({erro:{message: error.massage}})
})

module.exports = app