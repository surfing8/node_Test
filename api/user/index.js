const express = require('express')
const router = express.Router()
const ctrl = require('./index.ctrl')

router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.delete('/:id', ctrl.destroy)
router.post('/', ctrl.create)

 module.exports = router