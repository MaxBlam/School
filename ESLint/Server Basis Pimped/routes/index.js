const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCocktails } = require('../model');

const router = express.Router();

router.get(
  '/getcocktails',
  asyncHandler(async (req, res) => {
    const result = await getCocktails();
    res.status(result.code).json(result.data);
  }),
);

module.exports = router;
