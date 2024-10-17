const express = require('express');
const { createHabit, getUserHabits, updateHabit, deleteHabit } = require('../controllers/habitController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createHabit);
router.get('/', auth, getUserHabits);
router.put('/:id', auth, updateHabit);
router.delete('/:id', auth, deleteHabit);

module.exports = router;
