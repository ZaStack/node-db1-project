const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
        .from('accounts')
        .then(rows => {
            res.status(200).json({ data: rows })
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting data"})
        });
});

module.exports = router;