const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  getCocktails,
  getIngredients,
  getBelowPrice,
  deleteByName,
  insertCocktail,
  updatePrice,
} = require('../model');

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
    const result = await deleteByName(req.params.cname);
    res.status(result.code).json(result.data);
  }),
);
router.post(
  '/cocktail',
  asyncHandler(async (req, res) => {
    const result = await insertCocktail(req.body.cocktail);
    res.status(result.code).json(result.data);
  }),
);
router.patch(
  '/cocktail/:cname',
  asyncHandler(async (req, res) => {
    const result = await updatePrice(req.params.cname,req.body.price);
    res.status(result.code).json(result.data);
  }),
);

module.exports = router;
