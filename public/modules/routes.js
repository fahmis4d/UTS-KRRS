const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

const mongoose = require('mongoose');

router.get('/', function (req, res) {
    res.render('pages/login');
});

router.get('/login', function (req, res) {
    res.render('pages/login');
});

router.get('/dashboard', function (req, res) {
    res.render('pages/dashboard');
});

router.get('/registrasiKRRS', function (req, res) {
    res.render('pages/registrasiKRRS');
});



module.exports = router;