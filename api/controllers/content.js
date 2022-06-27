const Content = require('../models/Content');

async function index (req, res) {
    try {
        //const contents = await Content.all;
        res.status(200).end();
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        //const content = await Content.findById(req.params.id);
        res.status(200).end();
    } catch (err) {
        res.status(404).json({err})
    }
}

module.exports = { index, show }
