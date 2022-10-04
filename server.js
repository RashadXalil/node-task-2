const express = require('express')
const mongoose = require('mongoose')
const ProductModel = require('./Models/Products')
const app = express()
async function mongooseConnect() {
  await mongoose.connect(
    'mongodb+srv://rashadkhll:rashad918X.@cluster0.fmxu4.mongodb.net/?retryWrites=true&w=majority',
  )
}
mongooseConnect()
app.use(express.json())
// Products CRUD => getAll getById delete update
//===============================================
//add
app.post('/products', async (req, res) => {
  const newProd = new ProductModel(req.body)
  await newProd.save()
  res.status(201).send('Product Created !')
})
//get all
app.get('/products', async (req, res) => {
  const prods = await ProductModel.find()
  res.json(prods)
})
// get by id
app.get('/products/:id', async (req, res) => {
  const id = req.params.id
  const prod = await ProductModel.findById(id)
  res.status(200).json(prod)
})
//update
app.patch('/products/:id', async (req, res) => {
  const id = req.params.id
  const prod = await ProductModel.findByIdAndUpdate(id, req.body)
  res.status(200).json(prod)
})
//delete
app.delete('/products/:id', async (req, res) => {
  const id = req.params.id
  const prod = await ProductModel.findByIdAndDelete(id)
  res.status(200).json(prod)
})
app.listen(8080, () => {
  console.log('server running on 8080')
})
