// imports
const express = require('express')
const { getItems, getItem, deleteItem, createItem, updateItem } = require('../controllers/itemControllers')
const router = express.Router()

router.get('/', getItems)

router.get('/:id', getItem)

router.delete('/:id', deleteItem)

router.post('/', createItem)

router.patch('/:id', updateItem)


module.exports = router;