const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user.js');
const authRoute = require('./routes/auth.js');
const productRoute = require('./routes/product.js');
const cartRoute = require('./routes/cart.js');
const orderRoute = require('./routes/order.js');
const stripeRoute = require('./routes/stripe.js');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection successfull!'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(express.json());
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/carts', cartRoute);
app.use('/orders', orderRoute);
app.use('/checkout', stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running');
});
