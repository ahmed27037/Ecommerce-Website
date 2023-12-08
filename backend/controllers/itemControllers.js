const Store = require('../models/mongooseModel')
const mongoose = require('mongoose')

// getting all items
const getItems = async (req, res) => {
  try {
    // Fetch data from the database using your model
    const data = await Store.find({});
    // Promise send data or catch the error
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// getting one item by id
const getItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Your id doesnt match required number of digits'})
  }

  const item = await Store.findById(id)

  if (!item) {
    return res.status(404).json({error: 'No such item'})
  }

  res.status(200).json(item)

}

// deleteing one item by id
const deleteItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Your id doesnt match required number of digits'})
  }

  const item = await Store.findOneAndDelete({_id: id})

  if (!item) {
    return res.status(404).json({error: 'No such item'})
  }

  res.status(200).json(item)

}




// posting one item
const createItem = async (req, res) => {
  const {product_name, price, image, description} = req.body

  // add to the database
  try {
    const item = await Store.create({ product_name, price, image, description })
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}



// updating one item
const updateItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json({error: 'Your id doesn\'t match required number of digits'})
 }
 const item = await Store.findOneAndUpdate({_id: id,}, {
  ...req.body
 })
 if (!item) {
  return res.status(404).json({error: 'No such item'})
}

res.status(200).json(item)

}



module.exports = {getItems, getItem, deleteItem, createItem, updateItem}