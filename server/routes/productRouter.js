const express = require("express");
const productController = require("../controller/productController");

const router = express.Router();

router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.delete("/products/:id", productController.deleteProduct);
router.put("/products/:id", productController.updateProduct);
router.post("/products", productController.postProducts);

module.exports = router;
