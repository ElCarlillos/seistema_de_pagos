const express = require('express');
const router = express.Router();
const Provider = require('../models/Proveedor');
const User = require('../models/User');

router.get('/', (req,res) => {
    res.send("Hello from API!");
});

router.get('/providers', async (req, res) => {
    let providers = await Provider.find();
    //res.status(200).json(providers);
    res.render('index', {providers:providers});
});

router.get('/users', async (req, res) => {
    let users = await User.find();
    res.status(200).json(users);
});


module.exports = router;