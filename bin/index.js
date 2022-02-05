"use strict";
const path = require ('path');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoute = require('../dist/routes/user');
const authRoute = require('../dist/routes/auth');
const productRoute = require('../dist/routes/product');
const orderRoute = require('../dist/routes/order');
const cartRoute = require('../dist/routes/cart');
const indexRouter = require('../dist/routes/index');
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

app.set('views', path.join(`${__dirname}/../`, 'views'));
app.set('view engine', 'ejs');

app.use('/api/auth', authRoute);
app.use('/', indexRouter);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/carts', cartRoute);
app.use('/api/checkout', stripeRoute);
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
});
