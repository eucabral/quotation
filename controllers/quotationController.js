const axios = require('axios')
const api = require('../Api')

exports.dolarQuotation = async (req,res,next) => {
    try {
        const { data } = await api.get('USD-BRL')
        
        return res.send({data})
    } catch (error) {
        res.send({error})
    }
}

exports.euroQuotation = async (req,res,next) => {
    try {
        const { data } = await api.get('EUR-BRL')
        
        return res.send({data})
    } catch (error) {
        res.send({error})
    }
}

exports.btcQuotation = async (req,res,next) => {
    try {
        const { data } = await api.get('BTC-BRL')
        
        return res.send({data})
    } catch (error) {
        res.send({error})
    }
}

