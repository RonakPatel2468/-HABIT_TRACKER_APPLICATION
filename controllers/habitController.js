const Habit = require('../models/Habit');

// Create Habit
exports.createHabit = async (req, res) => {
  const { name, goal, frequency } = req.body;
  try {
    const newHabit = new Habit({
      name,
      goal,
      frequency,
      user: req.user.id,
    });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get User Habits
exports.getUserHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.json(habits);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Update Habit
exports.updateHabit = async (req, res) => {
  const { id } = req.params;
  const { name, goal, frequency } = req.body;
  try {
    const habit = await Habit.findByIdAndUpdate(
      id,
      { name, goal, frequency },
      { new: true }
    );
    res.json(habit);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Delete Habit
exports.deleteHabit = async (req, res) => {
  const { id } = req.params;
  try {
    await Habit.findByIdAndDelete(id);
    res.json({ msg: 'Habit deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
