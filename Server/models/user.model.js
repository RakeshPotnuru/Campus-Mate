const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            'Password must contain at least one letter and one number'
          );
        }
      },
      private: true // used by the toJSON plugin
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!value.match(/^[a-zA-Z0-9_]+$/)) {
          throw new Error('Invalid username');
        }
      }
    },
    phoneNumber: {
      type: String,
      trim: true,
      validate(value) {
        if (!validator.isMobilePhone(value, 'any')) {
          throw new Error('Invalid phoneNumber');
        }
      }
    },
    avatarUrl: {
      type: String,
      trim: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error('Invalid avatarUrl');
        }
      }
    },
    authToken: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

// function to match password
userSchema.methods.authenticate = function (password, callback) {
  const promise = new Promise((resolve, reject) => {
    if (!password) reject(new Error('MISSING_PASSWORD'));

    bcrypt.compare(password, this.password, (error, result) => {
      if (!result) reject('INVALID_CURRENT_PASSWORD');
      resolve(this);
    });
  });

  if (typeof callback !== 'function') return promise;
  promise
    .then((result) => callback(null, result))
    .catch((err) => callback(err));
};

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const User = mongoose.model('User', userSchema);

module.exports = User;
