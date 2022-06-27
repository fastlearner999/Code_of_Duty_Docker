const Goal = require('../models/Goal');

async function index (req, res) {
    try {
        const goals = await Goal.all;
        res.status(200).json(goals);
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const goal = await Goal.findById(req.params.id);
        res.status(200).json(goal);
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const goal = await Goal.create(req.body);
        res.status(201).json(goal);
    } catch (err) {
        res.status(422).json({err})
    }
}

async function update (req, res) {
    try {
        const goal = await Goal.update(req.body);
        res.status(202).json(goal);
    } catch (err) {
        res.status(404).json({err})
    }
}

async function destroy (req, res) {
    try {
        const goal = await Goal.findById(req.params.id);
        const resp = await goal.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, show, create, update, destroy }
