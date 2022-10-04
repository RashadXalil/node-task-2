const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required!'],
    },
    description: String,
    brand: String,
    salePrice: Number,
    costPrice: Number,
    isDeleted: {
      type: Boolean,
      default: () => false,
    },
  },
  {
    timestamps: true,
  },
)
const ProductModel = mongoose.model('Products', ProductSchema)
module.exports = ProductModel
