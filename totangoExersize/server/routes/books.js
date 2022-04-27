const express = require('express');
const router = express.Router();
const books = require('../services/books');

/* GET books listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await books.get(req.query.page));
  } catch (err) {
    console.error(`Error while getting books `, err.message);
    next(err);
  }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
  try {
    res.json(await books.create(req.body));
  } catch (err) {
    console.error(`Error while creating books `, err.message);
    next(err);
  }
});

/* POST quotes */
router.delete('/*', async function(req, res, next) {
  try {
    res.json(await books.remove(req.query.isbn));
  } catch (err) {
    console.error(`Error while deleting books `, err.message);
    next(err);
  }
});

/* POST quotes */
router.put('/:isbn', async function(req, res, next) {
  try {
    console.log(req.params);
    res.json(await books.edit(req.params.isbn, req.body));
  } catch (err) {
    console.error(`Error while editing books `, err.message);
    next(err);
  }
});

module.exports = router;