const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {    
    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {    
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/add', async (req, res, next) => {
    try {
        let results = await db.add([req.body.category,req.body.amount,req.body.description,req.body.userId]);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router;