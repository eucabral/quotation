const axios = require('axios')
const api = require('../Api')

const message = 'Unexpected error'

exports.dolarQuotation = async (req,res,next) => {
    try {
        const { data } = await api.get('USD-BRL')
        
        const response = [{
            'code': data[0].code,
            'value': data[0].ask
        }]

        res.status(200).json(response)

    } catch (error) {
        res.json({message})
    }
}

exports.euroQuotation = async (req,res,next) => {
    try {
        const { data } = await api.get('EUR-BRL')

        const response = [{
            'code': data[0].code,
            'value': data[0].ask
        }]

        res.status(200).json(response)

    } catch (error) {
        res.send({message})
    }
}

exports.btcQuotation = async (req,res,next) => {
    try {
        const { data } = await api.get('BTC-BRL')
        
        const response = [{
            'code': data[0].code,
            'value': data[0].ask
        }]

        res.status(200).json(response)
        
    } catch (error) {
        res.json({message})
    }
}

