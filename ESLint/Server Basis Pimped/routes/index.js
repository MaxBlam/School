const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCocktails, getIngredients } = require('../model');

const router = express.Router();

router.get(
  '/getcocktails',
  asyncHandler(async (req, res) => {
    const result = await getCocktails();
    res.status(result.code).json(result.data);
  }),
);

router.get(
  '/cocktails/:cname/zutaten',
  asyncHandler(async (req, res) => {
    const result = await getIngredients(req.params.cname);
    res.status(result.code).json(result.data);
  }),
);

module.exports = router;
