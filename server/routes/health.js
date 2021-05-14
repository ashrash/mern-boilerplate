const express = require('express');

const router = express.Router();

router.get('/auth', (_, res) => {
  res.status(200).json(new Date());
});

module.exports = router;
