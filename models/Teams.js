const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamsSchema = new Schema({
  division: {
    type: String,
    unique: false,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  cost:{
    type: Number,
    unique: false,
    required: true
  },
  schedule: [{
    date: {
      type: Date,
      required: false,
    },
    game: {
      type: String,
      unique: false,
    },
    location:{
      type: String,
      unique: false,
    }
  }],
  roster: [{
    name: {
      type: String,
      unique: false,
    },
    dob: {
      type: Date,
      unique: false,
    },
    address: {
      type: String,
      unique: false
    },
    phone: {
      type: String,
      unique: false
    }
  }]
});

const Teams = mongoose.model('Teams', teamsSchema);

module.exports = Teams;