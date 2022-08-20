const express = require('express')
const router = express.Router()

const quotationController = require('../controllers/quotationController')

router.get('/dolar',quotationController.dolarQuotation)
router.get('/euro',quotationController.euroQuotation)
router.get('/btc',quotationController.btcQuotation)

module.exports = router