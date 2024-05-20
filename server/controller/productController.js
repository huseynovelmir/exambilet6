const Product = require("../model/product");

//! Get All Users
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
//! Post  Users
const postProducts = async (req, res) => {
  try {
    const { name, title, price, img } = req.body;
    const product = new Product({
      name,
      title,
      price,
      img,
    });
    await product.save();

    res.status(201).send(product);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
//! Get User By Id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//! Delete User
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//! Update User
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, title, img } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        title,
        img,
      },
      { new: true }
    );

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  postProducts,
};
