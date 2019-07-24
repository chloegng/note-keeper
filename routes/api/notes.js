const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Note = require('../../models/Notes');

// @route     POST api/notes
// @desc      Test route
// @access    Public
router.post('/', [
  check('title', 'Title is required')
    .not()
    .isEmpty(),
  check('body', 'Body is required')
    .not()
    .isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, body } = req.body;
  try {
    note = new Note({
      title,
      body
    });
    await note.save();
    res.json(note);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router; 