const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const usersSchema = new Schema({
  firstname: {
    type: String,
    unique: false,
    required: true,
  },
  lastname: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  admin: {
    type: Boolean,
    unique: false,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  participants: [{
    childName: {
      type: String,
      unique: false,
    },
    childDoB: {
      type: Date,
    },
    address: {

    }, 
    teams: [{
      TeamName: {
        type: String
      },
      FeesDue:{
        type: Number
      } 
    }]
  }],
});

usersSchema.virtual('balance').get(function() {
  if(this.participants === undefined || this.participants.length === 0)
    {return 0;}
  else{
    let total = 0;
    for (let i = 0; i < this.participants.length; i++) {
      totol += this.participants[i].feesDue;      
    }
    return total;
  }
});

usersSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usersSchema.methods.validPassword = (password, encrypted) => {
  return bcrypt.compareSync(password, encrypted);
};

const User = mongoose.model('User', usersSchema);

module.exports = User;
