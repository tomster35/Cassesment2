const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Shoe  = require('../models/Shoe ').Shoe ;

/**
 * Functionality for this route:
 *  C   POST    /Cakes/        Create a new Cake
 *  R   GET     /Cakes         Gets an array of all Cakes
 *  R   GET     /Cakes/:id     Get a single Cake, by ID
 *  U   PUT     /Cakes/:id     Update a single Cake, by id
 *  D   DELETE  /Cakes/:id     Delete a single Cake, by ID
 */

// GET an array of all Cakes
router.get('/', (req, res) => {
    return mongoose
      .model('Shoe')
      .find({})
      .then (shoes => res.json(shoes))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single cake by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Shoe ')
    .findOne({_id: req.params.id})
    .then (shoe => res.json(shoe))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new cake
router.post('/', (req, res) => {
  return new Shoe({
    title     : req.body.title,
  })
  .save()
  .then (shoe => Shoe.populate(cake, {path: '_id'}))
  .then (shoe => res.json(shoe))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Shoe 
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a cake
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Shoe 
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
      }},
      {new: true}
    )
    .then (shoe => Shoe.populate(shoe, {path: '_id'}))
    .then (shoe => res.json(shoe))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;