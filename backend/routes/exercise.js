const express = require("express");
const Exercise = require("../models/exercise");
const security = require("../middleware/security");
const router = express.Router();

// add new activity
router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const exercise = await Exercise.addExercise({ user, exercise: req.body });
    return res.status(201).json({ exercise });
  } catch (err) {
    next(err);
  }
});

//shows previous exercises
router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const exercises = await Exercise.listAllExercise({ user });
    return res.status(200).json({ exercises });
  } catch (err) {
    next(err);
  }
});

//looks up exercises
router.get("/:exerciseId", async (req, res, next) => {
  try {
    const { user } = res.locals;
    const { exerciseId } = req.params;
    console.log("EXERCISE ID IS", exerciseId);
    const exercise = await Exercise.lookupExerciseById({ user }, exerciseId);
    return res.status(200).json({ exercise });
  } catch (err) {
    next(err);
  }
});

module.exports = router;