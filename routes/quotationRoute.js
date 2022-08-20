const express = require('express')
const router = express.Router()

const quotationController = require('../controllers/quotationController')

router.get('/',quotationController.getdolarquotation)

module.exports = router