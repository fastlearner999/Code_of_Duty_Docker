const Workout = require('../models/Workout');

async function index (req, res) {
    try {
        const workouts = await Workout.all;
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const workout = await Workout.findById(req.params.id);
        res.status(200).json(workout);
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const workout = await Workout.create(req.body);
        res.status(201).json(workout);
    } catch (err) {
        res.status(422).json({err})
    }
}

async function update (req, res) {
    try {
        const workout = await Workout.update(req.body);
        res.status(202).json(workout);
    } catch (err) {
        res.status(404).json({err})
    }
}

async function destroy (req, res) {
    try {
        const workout = await Workout.findById(req.params.id);
        await workout.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({err});
    };
}

module.exports = { index, show, create, update, destroy }
