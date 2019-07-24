const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Note = require('../../models/Notes');

// @route     Get api/notes
// @desc      Get notes for logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    // get notes of that user
    const notes = await Note.find({ user: req.user.id }).sort({
      dateUpdated: -1
    });
    res.json(notes);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route     POST api/notes
// @desc      Add new note
// @access    Private
router.post('/', auth, [
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
      body,
      user: req.user.id
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
// @access    Private
router.put('/:id', auth, [
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
    // Make sure authorized user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

// @route     DELETE api/notes/:id
// @desc      Delete a note
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: 'Note was not found' });
    // Make sure authorized user owns this note 
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Note.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Note deleted' });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

module.exports = router; 