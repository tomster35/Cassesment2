const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const ShoeSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    size: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }
    
  }, SchemeConfig);

  module.exports.Shoes = mongoose.model('Shoe', ShoeSchema);