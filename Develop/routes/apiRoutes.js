const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.workout
        .find({})
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });
    app.get("/api/workouts/range", (req, res) => {
        db.workout
        .find()
        .then((dbData) => {
            res.send(dbData);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });
    app.post("/api/workouts", (req, res) => {
        db.workout
        .find()
        .then((dbData) => {
            res.send(dbData);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });
    app.put("api/workouts/:id", ({ body, params}, res) => {
        db.workout
        .findByIdAndUpdate(
            params.id,
            { $push: { exercise: body } },
            { new: true, runValidators: true }
        )
        .then((dbData) => {
            res.send(dbData);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    });
};