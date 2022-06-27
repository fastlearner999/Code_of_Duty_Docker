const User = require('../models/User');

async function index (req, res) {
    try {
        const users = await User.all;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        //const user = await User.findById(req.params.id);
        res.status(200).end();
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        //const user = await User.create(req.body);
        res.status(201).end();
    } catch (err) {
        res.status(422).json({err})
    }
}

async function update (req, res) {
    try {
        //const user = await User.update(req.body);
        res.status(202).end();
    } catch (err) {
        res.status(404).json({err})
    }
}

async function destroy (req, res) {
    try {
        //const user = await User.findById(req.params.id);
        //const resp = await book.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, show, create, update, destroy }
