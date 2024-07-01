const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const productsRouter = require("./products/router");

router.use("/products", productsRouter);

/* ************************************************************************* */

module.exports = router;
