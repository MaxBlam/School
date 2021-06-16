const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get(
  '/welcome',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

router.get(
  '/dogs',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

module.exports = router;
