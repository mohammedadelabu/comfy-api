"use strict";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoute = require('../dist/routes/user');
const authRoute = require('../dist/routes/auth');
const productRoute = require('../dist/routes/product');
const orderRoute = require('../dist/routes/order');
const cartRoute = require('../dist/routes/cart');
const cors = require("cors");
const stripeRoute = require('../dist/routes/stripe');
dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Succesful!"))
    .catch((err) => {
    console.log(err);
});
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send({status:ok,response:'The Comfy-Store Api is working'})
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/carts', cartRoute);
app.use('/api/checkout', stripeRoute);
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
});
