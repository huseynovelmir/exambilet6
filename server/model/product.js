const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, require: true },
  price: { type: String },
  title: { type: String, require: true },
  img: { type: String, require: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
