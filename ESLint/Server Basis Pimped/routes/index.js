const express = require('express');
const asyncHandler = require('express-async-handler');
const { getCocktails, getIngredients, getBelowPrice } = require('../model');

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

router.get(
  '/cocktails/:price',
  asyncHandler(async (req, res) => {
    const result = await getBelowPrice(req.params.price);
    res.status(result.code).json(result.data);
  }),
);
router.delete(
  '/cocktails/:cname',
  asyncHandler(async (req, res) => {
    const result = await getBelowPrice(req.params.cname);
    res.status(result.code).json(result.data);
  }),
);

module.exports = router;
