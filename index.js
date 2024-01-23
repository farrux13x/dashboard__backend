const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const customer = require('./modules/customers')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/customers', customer)


mongoose.connect('mongodb://0.0.0.0:27017/test')
.then(() => {
    console.log('MongoDB run...');
})
.catch((err) => {
    console.error('mongo error', err);
})


const port = 3100

app.listen(port, () => {
    console.log(`${port}, port start`);
})