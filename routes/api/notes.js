const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Note = require('../../models/Notes');

// @route     Get api/notes
// @desc      Get notes route
// @access    Public
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route     POST api/notes
// @desc      Add notes route
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


// @route     PUT api/notes/:id
// @desc      Update a note 
// @access    Public
router.put('/:id', [
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
  // Build note object
  const noteFields = {};
  if (title) noteFields.title = title;
  if (body) noteFields.body = body;
  noteFields.dateUpdated = Date.now();
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: 'Note not found' });
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
}); 

module.exports = router; 