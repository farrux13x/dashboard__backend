const mongoose = require('mongoose')
const express = require('express')

const router = express.Router()



router.get('/', (req, res) => {
    
    async function setCustomers() {
        const customers = await Customer.find()
        res.send(customers)
    }

    setCustomers()
})

router.post('/', (req, res) => {

    if(req.body.name){
        createCustomer()
    }
    async function createCustomer() {

        const customer = new Customer({
            name: req.body.name,
            price: req.body.price,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber
        })
    
        const saveCustomer = await customer.save()
        res.send(saveCustomer);
    }
    
})

router.get('/search', (req, res) => {
    
    async function setCustomers() {
    const customers = await Customer.find({name: `${/.* ${dadsda} .*/}`})
        res.send({customers,text:req.query.text})
    }

    setCustomers()
})

router.post('/:id', (req, res) => {

    async function updateCustomer() {
        const customer = await Customer.findById(req.params.id)

        if(!customer) 
            return
        
        customer.set(req.body)

        const updateCustomer = await customer.save()

        res.send(updateCustomer)
    }

    updateCustomer()
})



const customerSchema = new mongoose.Schema({
    name: String,
    price: Number,
    date: Date,
    address: String,
    phoneNumber: Number
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = router
