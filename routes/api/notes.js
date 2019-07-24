const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('add notes route');
});

module.exports = router; 