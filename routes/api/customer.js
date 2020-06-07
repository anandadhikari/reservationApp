const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// Model
const Customer= require('../../models/Customer');

router.get('/', (req, res) => {
    Customer.find()
        .sort({ date: -1 })
        .then(customer => res.json(customer))
});

router.post('/',(req, res) => {
    console.log(req.body)
    const customer = req.body;
    const newCustomer = new Customer(customer);
    newCustomer
       .save()
       .then(doc => res.json(doc))
       .catch(err => console.log({ create: "Error creating new Reservation" }));
});

router.delete('/:id', auth, (req, res) => {
    Customer.findById(req.params.id)
        .then(customer => customer .remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router; 